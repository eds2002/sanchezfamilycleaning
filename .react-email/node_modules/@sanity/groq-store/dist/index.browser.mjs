var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import groq from 'groq';
export { default as groq } from 'groq';
import deepEqual from 'fast-deep-equal';
import { throttle } from 'throttle-debounce';
import { parse, evaluate } from 'groq-js';
import { applyPatch } from 'mendoza';
const isNativeBrowserEventSource = eventSource => typeof window !== "undefined" && eventSource.addEventListener === window.EventSource.prototype.addEventListener;
const isPolyfillEventSource = eventSource => !isNativeBrowserEventSource(eventSource);
const addEventSourceListener = (eventSource, type, listener) => {
  if (isPolyfillEventSource(eventSource)) {
    eventSource.addEventListener(type, listener);
  } else {
    eventSource.addEventListener(type, listener, false);
  }
};
const encodeQueryString = _ref => {
  let {
    query,
    params = {},
    options = {}
  } = _ref;
  const searchParams = new URLSearchParams();
  const {
    tag,
    ...opts
  } = options;
  if (tag) searchParams.set("tag", tag);
  searchParams.set("query", query);
  for (const [key, value] of Object.entries(params)) {
    searchParams.set("$".concat(key), JSON.stringify(value));
  }
  for (const [key, value] of Object.entries(opts)) {
    if (value) searchParams.set(key, "".concat(value));
  }
  return "?".concat(searchParams);
};
function listen(EventSourceImpl, config, handlers) {
  const {
    projectId,
    dataset,
    token,
    includeTypes,
    requestTagPrefix
  } = config;
  const headers = token ? {
    Authorization: "Bearer ".concat(token)
  } : void 0;
  const options = requestTagPrefix ? {
    tag: requestTagPrefix,
    effectFormat: "mendoza"
  } : {
    effectFormat: "mendoza"
  };
  const searchParams = encodeQueryString(Array.isArray(includeTypes) && includeTypes.length > 0 ? {
    query: "*[_type in $includeTypes]",
    params: {
      includeTypes
    },
    options
  } : {
    query: "*",
    options
  });
  const url = "https://".concat(projectId, ".api.sanity.io/v1/data/listen/").concat(dataset).concat(searchParams);
  const es = new EventSourceImpl(url, {
    withCredentials: true,
    headers
  });
  addEventSourceListener(es, "welcome", handlers.open);
  addEventSourceListener(es, "mutation", getMutationParser(handlers.next));
  addEventSourceListener(es, "channelError", msg => {
    es.close();
    let data;
    try {
      data = JSON.parse(msg.data);
    } catch (err) {
      handlers.error(new Error("Unknown error parsing listener message"));
      return;
    }
    handlers.error(new Error(data.message || data.error || "Listener returned HTTP ".concat(data.statusCode)));
  });
  addEventSourceListener(es, "error", err => {
    const origin = typeof window !== "undefined" && window.location.origin;
    const hintSuffix = origin ? ", and that the CORS-origin (".concat(origin, ") is allowed") : "";
    const errorMessage = isErrorLike(err) ? " (".concat(err.message, ")") : "";
    handlers.error(new Error("Error establishing listener - check that the project ID and dataset are correct".concat(hintSuffix).concat(errorMessage)));
  });
  return {
    unsubscribe: () => Promise.resolve(es.close())
  };
}
function getMutationParser(cb) {
  return msg => {
    let data;
    try {
      data = JSON.parse(msg.data);
    } catch (err) {
      return;
    }
    cb(data);
  };
}
function isErrorLike(err) {
  return typeof err === "object" && err !== null && "message" in err;
}
function isDraft(doc) {
  return doc._id.startsWith("drafts.");
}
function getPublishedId(document) {
  return isDraft(document) ? document._id.slice(7) : document._id;
}
function applyPatchWithoutRev(doc, patch) {
  const patchDoc = {
    ...doc
  };
  delete patchDoc._rev;
  return applyPatch(patchDoc, patch);
}
function compareString(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}
const DEBOUNCE_MS = 25;
function noop() {
  return Promise.resolve();
}
function getSyncingDataset(config, onNotifyUpdate, _ref2) {
  let {
    getDocuments,
    EventSource
  } = _ref2;
  const {
    projectId,
    dataset,
    listen: useListener,
    overlayDrafts,
    documentLimit,
    token,
    includeTypes,
    requestTagPrefix
  } = config;
  let stagedDocs;
  let previousTrx;
  let flushTimeout;
  const onUpdate = docs => {
    stagedDocs = void 0;
    flushTimeout = void 0;
    previousTrx = void 0;
    const finalDocs = overlayDrafts ? overlay(docs) : docs;
    finalDocs.sort((a, b) => compareString(a._id, b._id));
    onNotifyUpdate(finalDocs);
  };
  if (!useListener) {
    const loaded2 = getDocuments({
      projectId,
      dataset,
      documentLimit,
      token,
      includeTypes,
      requestTagPrefix
    }).then(onUpdate).then(noop);
    return {
      unsubscribe: noop,
      loaded: loaded2
    };
  }
  const indexedDocuments = /* @__PURE__ */new Map();
  let documents;
  const buffer = [];
  let onDoneLoading;
  let onLoadError;
  const loaded = new Promise((resolve, reject) => {
    onDoneLoading = resolve;
    onLoadError = reject;
  });
  const onOpen = async () => {
    const initial = await getDocuments({
      projectId,
      dataset,
      documentLimit,
      token,
      includeTypes,
      requestTagPrefix
    });
    documents = applyBufferedMutations(initial, buffer);
    documents.forEach(doc => indexedDocuments.set(doc._id, doc));
    onUpdate(documents);
    onDoneLoading();
  };
  const onMutationReceived = msg => {
    if (documents) {
      applyMutation(msg);
      scheduleUpdate(documents, msg);
    } else {
      buffer.push(msg);
    }
  };
  const listener = listen(EventSource, config, {
    next: onMutationReceived,
    open: onOpen,
    error: error => onLoadError(error)
  });
  const scheduleUpdate = (docs, msg) => {
    clearTimeout(flushTimeout);
    if (previousTrx !== msg.transactionId && stagedDocs) {
      onUpdate(stagedDocs);
      previousTrx = void 0;
    } else {
      previousTrx = msg.transactionId;
      stagedDocs = docs.slice();
    }
    flushTimeout = setTimeout(onUpdate, DEBOUNCE_MS, docs.slice());
  };
  const applyMutation = msg => {
    if (!msg.effects || msg.documentId.startsWith("_.")) {
      return;
    }
    const document = indexedDocuments.get(msg.documentId) || null;
    replaceDocument(msg.documentId, applyPatchWithoutRev(document, msg.effects.apply));
  };
  const replaceDocument = (id, document) => {
    const current = indexedDocuments.get(id);
    const docs = documents || [];
    const position = current ? docs.indexOf(current) : -1;
    if (position === -1 && document) {
      docs.push(document);
      indexedDocuments.set(id, document);
    } else if (document) {
      docs.splice(position, 1, document);
      indexedDocuments.set(id, document);
    } else {
      docs.splice(position, 1);
      indexedDocuments.delete(id);
    }
  };
  return {
    unsubscribe: listener.unsubscribe,
    loaded
  };
}
function applyBufferedMutations(documents, mutations) {
  const groups = /* @__PURE__ */new Map();
  mutations.forEach(mutation => {
    const group = groups.get(mutation.documentId) || [];
    group.push(mutation);
    groups.set(mutation.documentId, group);
  });
  groups.forEach((group, id) => {
    const document = documents.find(doc => doc._id === id);
    if (!document) {
      console.warn("Received mutation for missing document %s", id);
      return;
    }
    let hasFoundRevision = false;
    let current = document;
    group.forEach(mutation => {
      hasFoundRevision = hasFoundRevision || mutation.previousRev === document._rev;
      if (!hasFoundRevision) {
        return;
      }
      if (mutation.effects) {
        current = applyPatchWithoutRev(current, mutation.effects.apply);
      }
    });
    documents.splice(documents.indexOf(document), 1, current);
  });
  return documents;
}
function overlay(documents) {
  const overlayed = /* @__PURE__ */new Map();
  documents.forEach(doc => {
    const existing = overlayed.get(getPublishedId(doc));
    if (doc._id.startsWith("drafts.")) {
      overlayed.set(getPublishedId(doc), pretendThatItsPublished(doc));
    } else if (!existing) {
      overlayed.set(doc._id, {
        ...doc,
        _originalId: doc._id
      });
    }
  });
  return Array.from(overlayed.values());
}
function pretendThatItsPublished(doc) {
  return {
    ...doc,
    _id: getPublishedId(doc),
    _originalId: doc._id
  };
}
function groqStore$1(config, envImplementations) {
  let documents = [];
  const executeThrottled = throttle(config.subscriptionThrottleMs || 50, executeAllSubscriptions);
  const activeSubscriptions = [];
  let dataset;
  async function loadDataset() {
    if (!dataset) {
      dataset = getSyncingDataset(config, docs => {
        documents = docs;
        executeThrottled();
      }, envImplementations);
    }
    await dataset.loaded;
  }
  async function query(groqQuery, params) {
    await loadDataset();
    const tree = parse(groqQuery, {
      params
    });
    const result = await evaluate(tree, {
      dataset: documents,
      params
    });
    return result.get();
  }
  async function getDocument(documentId) {
    await loadDataset();
    return query(groq(_templateObject || (_templateObject = _taggedTemplateLiteral(["*[_id == $id][0]"]))), {
      id: documentId
    });
  }
  async function getDocuments(documentIds) {
    await loadDataset();
    const subQueries = documentIds.map(id => "*[_id == \"".concat(id, "\"][0]")).join(",\n");
    return query("[".concat(subQueries, "]"));
  }
  function subscribe(groqQuery, params, callback) {
    if (!config.listen) {
      throw new Error("Cannot use `subscribe()` without `listen: true`");
    }
    const subscription = {
      query: groqQuery,
      params,
      callback
    };
    activeSubscriptions.push(subscription);
    let unsubscribed = false;
    const unsubscribe = () => {
      if (unsubscribed) {
        return Promise.resolve();
      }
      unsubscribed = true;
      activeSubscriptions.splice(activeSubscriptions.indexOf(subscription), 1);
      return Promise.resolve();
    };
    executeQuerySubscription(subscription);
    return {
      unsubscribe
    };
  }
  function executeQuerySubscription(subscription) {
    return query(subscription.query, subscription.params).then(res => {
      if ("previousResult" in subscription && deepEqual(subscription.previousResult, res)) {
        return;
      }
      subscription.previousResult = res;
      subscription.callback(void 0, res);
    }).catch(err => {
      subscription.callback(err);
    });
  }
  function executeAllSubscriptions() {
    activeSubscriptions.forEach(executeQuerySubscription);
  }
  function close() {
    executeThrottled.cancel();
    return dataset ? dataset.unsubscribe() : Promise.resolve();
  }
  return {
    query,
    getDocument,
    getDocuments,
    subscribe,
    close
  };
}
const getDocuments = async function getDocuments2(_ref3) {
  let {
    projectId,
    dataset,
    token,
    documentLimit,
    includeTypes = [],
    requestTagPrefix
  } = _ref3;
  const url = new URL("https://".concat(projectId, ".api.sanity.io/v1/data/export/").concat(dataset));
  if (requestTagPrefix) {
    url.searchParams.set("tag", requestTagPrefix);
  }
  if (includeTypes.length > 0) {
    url.searchParams.set("types", includeTypes == null ? void 0 : includeTypes.join(","));
  }
  const headers = token ? {
    Authorization: "Bearer ".concat(token)
  } : void 0;
  const response = await fetch(url, {
    credentials: "include",
    headers
  });
  if (response.status !== 200) {
    throw new Error("Error streaming dataset: ".concat(getError(await response.json())));
  }
  const stream = getDocumentStream(response.body);
  const reader = stream.getReader();
  const documents = [];
  let result;
  let document;
  do {
    result = await reader.read();
    document = result.value;
    if (isStreamError(document)) {
      throw new Error("Error streaming dataset: ".concat(document.error));
    } else if (document && isRelevantDocument(document)) {
      documents.push(document);
    }
    if (documentLimit && documents.length > documentLimit) {
      reader.cancel("Reached document limit");
      throw new Error("Error streaming dataset: Reached limit of ".concat(documentLimit, " documents. Try using the includeTypes option to reduce the amount of documents, or increase the limit."));
    }
  } while (!result.done);
  return documents;
};
function getDocumentStream(body) {
  if (!body) {
    throw new Error("Failed to read body from response");
  }
  let reader;
  let cancelled = false;
  function cancel() {
    cancelled = true;
    if (reader) {
      reader.cancel();
    }
  }
  return new ReadableStream({
    start(controller) {
      reader = body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      reader.read().then(processResult).catch(err => controller.error(err));
      async function processResult(result) {
        if (result.done) {
          if (cancelled) {
            return;
          }
          buffer = buffer.trim();
          if (buffer.length === 0) {
            controller.close();
            return;
          }
          controller.enqueue(JSON.parse(buffer));
          controller.close();
          return;
        }
        buffer += decoder.decode(result.value, {
          stream: true
        });
        const lines = buffer.split("\n");
        for (let i = 0; i < lines.length - 1; ++i) {
          const line = lines[i].trim();
          if (line.length === 0) {
            continue;
          }
          try {
            controller.enqueue(JSON.parse(line));
          } catch (err) {
            controller.error(err);
            cancel();
            return;
          }
        }
        buffer = lines[lines.length - 1];
        if (!reader) {
          return;
        }
        try {
          processResult(await reader.read());
        } catch (err) {
          controller.error(err);
        }
      }
    },
    cancel
  });
}
function isStreamError(result) {
  if (!result) {
    return false;
  }
  if (!("error" in result) || typeof result.error !== "object" || result.error === null) {
    return false;
  }
  return "description" in result.error && typeof result.error.description === "string" && !("_id" in result);
}
function getError(body) {
  if (typeof body === "object" && "error" in body && "message" in body) {
    return body.message || body.error;
  }
  return "<unknown error>";
}
function isRelevantDocument(doc) {
  return !doc._id.startsWith("_.");
}
function assertEnvSupport() {
  const required = ["EventSource", "ReadableStream", "fetch"];
  const unsupported = required.filter(api => !(api in window));
  if (unsupported.length > 0) {
    throw new Error("Browser not supported. Missing browser APIs: ".concat(unsupported.join(", ")));
  }
}
function groqStore(config) {
  var _a;
  assertEnvSupport();
  const EventSource = (_a = config.EventSource) != null ? _a : window.EventSource;
  if (config.token) {
    if (!config.EventSource) {
      throw new Error("When the `token` option is used the `EventSource` option must also be provided.");
    }
    if (config.EventSource === window.EventSource) throw new Error("When the `token` option is used the `EventSource` option must also be provided. EventSource cannot be `window.EventSource`, as it does not support passing a token.");
  }
  return groqStore$1(config, {
    EventSource,
    getDocuments
  });
}
export { groqStore };
//# sourceMappingURL=index.browser.mjs.map
