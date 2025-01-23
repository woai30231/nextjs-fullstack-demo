import React, { createContext, useContext, useRef } from 'react';

import createStore from '@/store/store';

import type { Layout } from '@/types';
import type { ZustandInitialState } from '@/types/initialState.type';
import type { ZustandStoreApi } from '@/types/store.type';

const ZustandContext = createContext<ZustandStoreApi | undefined>(undefined);

const ZustandProvider: Layout<ZustandInitialState> = ({ children, initialState }) => {
  const storeRef = useRef<ZustandStoreApi>(undefined);

  if (!storeRef.current) {
    storeRef.current = createStore(initialState);
  }

  return <ZustandContext value={storeRef.current}>{children}</ZustandContext>;
};

export const useZustand = (): ZustandStoreApi => {
  const store = useContext(ZustandContext);
  if (!store) throw new Error('Missing ZustandProvider.Provider in the tree');

  return store;
};

export default ZustandProvider;
