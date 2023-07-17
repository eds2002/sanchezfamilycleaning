import { useReducer, useRef, useCallback, startTransition, useEffect, useMemo, createContext } from 'react';
function getQueryCacheKey(query, params) {
  return "".concat(query, "-").concat(JSON.stringify(params));
}
function useLoadingListenersContext(ready) {
  const [tick, forceUpdate] = useReducer(x => x + 1, 0);
  const mountedRef = useRef(true);
  const scheduleUpdate = useCallback(() => {
    if (mountedRef.current) {
      startTransition(() => forceUpdate());
    }
  }, []);
  useEffect(() => {
    mountedRef.current = true;
    scheduleUpdate();
    return () => {
      mountedRef.current = false;
    };
  }, [scheduleUpdate]);
  const loadedListenersContext = useMemo(() => tick ? [...ready] : [], [ready, tick]);
  return [loadedListenersContext, scheduleUpdate];
}
const DEFAULT_MAX_DOCUMENTS = 3e3;
const DEFAULT_TAG = "sanity.preview-kit";
const snapshots = /* @__PURE__ */new Map();
const deps = /* @__PURE__ */new Map();
const NoStoreContext = function defineListener(initialSnapshot, query, params) {
  const key = getQueryCacheKey(query, params);
  snapshots.set(key, initialSnapshot);
  if (!deps.has(key)) {
    deps.set(key, 0);
  }
  const subscribe = () => {
    deps.set(key, deps.get(key) + 1);
    return () => {
      deps.set(key, deps.get(key) - 1);
      if (deps.get(key) === 0) {
        snapshots.delete(key);
      }
    };
  };
  const getSnapshot = () => snapshots.has(key) ? snapshots.get(key) : initialSnapshot;
  return {
    subscribe,
    getSnapshot
  };
};
const defineListenerContext = createContext(NoStoreContext);
const LoadedListenersContext = createContext(null);
export { DEFAULT_MAX_DOCUMENTS, DEFAULT_TAG, LoadedListenersContext, defineListenerContext, getQueryCacheKey, useLoadingListenersContext };
//# sourceMappingURL=context-a9a2d4a8.js.map
