import { createStore as createZustandStore, useStore as useZustandStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import { useZustand } from '@/context/ZustandProvider';
import createAuthSlice from '@/store/slices/auth/auth.slice';
import createThemeSlice from '@/store/slices/theme/theme.slice';

import type { CreateStore, StateFromFunctions, UseStore } from '@/types/store.type';

export type StoreState = StateFromFunctions<[typeof createAuthSlice, typeof createThemeSlice]>;

export const createStore: CreateStore = (state) =>
  createZustandStore<StoreState>()(
    devtools((...a) => ({
      ...createAuthSlice(...a),
      ...createThemeSlice(...a),
      ...state,
    })),
  );

export const useStore: UseStore = (selector) => {
  const store = useZustand();
  return useZustandStore(store, selector);
};
