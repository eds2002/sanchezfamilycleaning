'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var react = require('react');
var isFastEqual = require('react-fast-compare');
var withSelector = require('use-sync-external-store/with-selector');
var context = require('./_chunks/context-e714ce60.cjs');
var jsxRuntime = require('react/jsx-runtime');
function _interopDefaultCompat(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    default: e
  };
}
var isFastEqual__default = /*#__PURE__*/_interopDefaultCompat(isFastEqual);
function useLiveQuery(initialData, query, queryParams, options) {
  const {
    isEqual = isFastEqual__default.default
  } = options || {};
  const defineStore = react.useContext(context.defineListenerContext);
  const params = useParams(queryParams);
  const store = react.useMemo(() => defineStore(initialData, query, params), [defineStore, initialData, params, query]);
  const [serverSnapshot] = react.useState(() => {
    if (initialData === void 0) {
      throw new Error("initialSnapshot can't be undefined, if you don't want an initial value use null instead");
    }
    try {
      return JSON.parse(JSON.stringify(initialData));
    } catch (error) {
      console.warn("Failed to deep clone initialSnapshot, this is likely an error and an indication that the snapshot isn't JSON serializable", {
        initialSnapshot: initialData,
        error
      });
      return initialData;
    }
  });
  const getServerSnapshot = react.useCallback(() => serverSnapshot, [serverSnapshot]);
  const selector = react.useCallback(snapshot2 => snapshot2, []);
  const snapshot = withSelector.useSyncExternalStoreWithSelector(store.subscribe, store.getSnapshot, getServerSnapshot, selector, isEqual);
  const loading = useLiveQueryIsLoading(query, params);
  return [snapshot, loading];
}
function useLiveQueryIsLoading(query, params) {
  const loadedListeners = react.useContext(context.LoadedListenersContext);
  const key = react.useMemo(() => context.getQueryCacheKey(query, params), [params, query]);
  return react.useMemo(() => {
    if (Array.isArray(loadedListeners)) {
      return loadedListeners.includes(key) ? false : true;
    }
    return false;
  }, [key, loadedListeners]);
}
function useListeningQuery(initialSnapshot, query, queryParams, options) {
  const [snapshot] = useLiveQuery(initialSnapshot, query, queryParams, options);
  return snapshot;
}
function useListeningQueryStatus(query, queryParams) {
  const params = useParams(queryParams);
  const loading = useLiveQueryIsLoading(query, params);
  return loading ? "loading" : "success";
}
function useParams(params) {
  const stringifiedParams = react.useMemo(() => JSON.stringify(params || {}), [params]);
  return react.useMemo(() => JSON.parse(stringifiedParams), [stringifiedParams]);
}
const LazyGroqStoreProvider = react.lazy(() => Promise.resolve().then(function () {
  return require('./_chunks/index-455ec56a.cjs');
}));
const LiveStoreProvider = react.lazy(() => Promise.resolve().then(function () {
  return require('./_chunks/index-3bd33b66.cjs');
}));
const LiveQueryProvider = react.memo(function LiveQueryProvider2(props) {
  const {
    children,
    refreshInterval = 1e4
  } = props;
  if (!props.client) {
    throw new Error("Missing a `client` prop with a configured Sanity client instance");
  }
  const [client] = react.useState(() => props.client.withConfig({
    requestTagPrefix: props.client.config().requestTagPrefix || context.DEFAULT_TAG
  }));
  const [cache] = react.useState(() => props.cache);
  const [logger] = react.useState(() => props.logger);
  const turboSourceMap = react.useMemo(() => {
    var _a;
    return (_a = props.turboSourceMap) != null ? _a : client.config().resultSourceMap;
  }, [client, props.turboSourceMap]);
  if (turboSourceMap) {
    return /* @__PURE__ */jsxRuntime.jsx(react.Suspense, {
      fallback: children,
      children: /* @__PURE__ */jsxRuntime.jsx(LiveStoreProvider, {
        client,
        logger,
        refreshInterval,
        turboSourceMap,
        children
      })
    });
  }
  return /* @__PURE__ */jsxRuntime.jsx(SelectStoreProvider, {
    client,
    cache,
    logger,
    refreshInterval,
    children
  });
});
const SelectStoreProvider = react.memo(function SelectStoreProvider2(props) {
  var _a;
  const {
    children,
    refreshInterval,
    client,
    cache,
    logger
  } = props;
  const maxDocuments = (_a = cache == null ? void 0 : cache.maxDocuments) != null ? _a : context.DEFAULT_MAX_DOCUMENTS;
  const [documentsCount, setDocumentsCount] = react.useState(null);
  const [error, setError] = react.useState(null);
  const [includeTypes] = react.useState(() => {
    var _a2;
    return (_a2 = cache == null ? void 0 : cache.includeTypes) != null ? _a2 : [];
  });
  if (error) {
    throw error;
  }
  react.useEffect(() => {
    if (documentsCount !== null) {
      return;
    }
    logger == null ? void 0 : logger.log("[@sanity/preview-kit]: fetch documents count");
    const controller = new AbortController();
    client.fetch(includeTypes.length > 0 ? "count(*[_type in $includeTypes])" : "count(*)", {
      includeTypes
    }, {
      filterResponse: true,
      signal: controller.signal
    }).then(result => {
      logger == null ? void 0 : logger.log("[@sanity/preview-kit]: documents count", result);
      setDocumentsCount(result);
    }).catch(error2 => {
      if (error2.name !== "AbortError") {
        setError(error2);
      }
    });
    return () => {
      controller.abort();
    };
  }, [client, documentsCount, includeTypes, logger]);
  if (documentsCount === null) {
    return children;
  }
  if (refreshInterval && documentsCount >= maxDocuments) {
    return /* @__PURE__ */jsxRuntime.jsx(react.Suspense, {
      fallback: children,
      children: /* @__PURE__ */jsxRuntime.jsx(LiveStoreProvider, {
        client,
        refreshInterval,
        turboSourceMap: false,
        logger,
        children
      })
    });
  }
  if (documentsCount >= maxDocuments) {
    throw new Error("[@sanity/preview-kit]: You have ".concat(documentsCount, " documents in your dataset, which is more than the maximum of ").concat(maxDocuments, " documents. Please reduce the number of documents in your dataset or increase the limit."));
  }
  return /* @__PURE__ */jsxRuntime.jsx(react.Suspense, {
    fallback: children,
    children: /* @__PURE__ */jsxRuntime.jsx(GroqStoreProvider, {
      ...props,
      children
    })
  });
});
const GroqStoreProvider = react.memo(function GroqStoreProvider2(props) {
  var _a;
  const {
    children,
    client,
    cache,
    logger
  } = props;
  const {
    projectId,
    dataset,
    token,
    perspective = "previewDrafts",
    requestTagPrefix
  } = react.useMemo(() => client.config(), [client]);
  return /* @__PURE__ */jsxRuntime.jsx(LazyGroqStoreProvider, {
    projectId,
    dataset,
    token,
    logger,
    listen: (_a = cache == null ? void 0 : cache.listen) != null ? _a : true,
    documentLimit: cache == null ? void 0 : cache.maxDocuments,
    overlayDrafts: perspective === "previewDrafts",
    includeTypes: cache == null ? void 0 : cache.includeTypes,
    requestTagPrefix,
    children
  });
});
exports.LiveQueryProvider = LiveQueryProvider;
exports.useListeningQuery = useListeningQuery;
exports.useListeningQueryStatus = useListeningQueryStatus;
exports.useLiveQuery = useLiveQuery;
//# sourceMappingURL=index.cjs.map
