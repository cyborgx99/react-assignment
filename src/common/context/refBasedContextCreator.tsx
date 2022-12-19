import React, {
  useRef,
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  PropsWithChildren,
} from 'react';

export default function createRefBasedContext<Store, ActionTypes>(
  initialState: Store,
  reducer: (state: Store, action: ActionTypes) => Store,
) {
  function useStoreData(): {
    get: () => Store;
    dispatch: (action: ActionTypes) => void;
    subscribe: (callback: () => void) => () => void;
  } {
    const store = useRef(initialState);

    const get = useCallback(() => store.current, []);

    const subscribers = useRef(new Set<() => void>());

    const dispatch = useCallback((action: ActionTypes) => {
      store.current = reducer(store.current, action);
      subscribers.current.forEach((callback) => callback());
    }, []);

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => subscribers.current.delete(callback);
    }, []);

    return {
      get,
      dispatch,
      subscribe,
    };
  }

  type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

  const StoreContext = createContext<UseStoreDataReturnType | null>(null);

  function Provider({ children }: PropsWithChildren) {
    return <StoreContext.Provider value={useStoreData()}>{children}</StoreContext.Provider>;
  }

  function useStore<SelectorOutput>(
    selector: (store: Store) => SelectorOutput,
  ): [SelectorOutput, (action: ActionTypes) => void] {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error('Store not found');
    }

    const state = useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
      () => selector(initialState),
    );

    return [state, store.dispatch];
  }

  return {
    Provider,
    useStore,
  };
}
