import React, { createContext, useContext, useRef } from 'react';

import createStore from '@/store/store';

import type { Layout } from '@/types';
import type { ZustandInitialState, ZustandStoreApi } from '@/types/store';

export const ZustandContext = createContext<ZustandStoreApi | undefined>(undefined);

const ZustandProvider: Layout<ZustandInitialState> = ({ children, initialState }) => {
  const storeRef = useRef<ZustandStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createStore(initialState);
  }

  return <ZustandContext.Provider value={storeRef.current}>{children}</ZustandContext.Provider>;
};

export const useZustand = (): ZustandStoreApi => {
  const store = useContext(ZustandContext);
  if (!store) throw new Error('Missing ZustandProvider.Provider in the tree');

  return store;
};

export default ZustandProvider;
