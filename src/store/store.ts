import { createStore as createZustandStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import createAuthSlice, { setUser } from '@/store/slices/auth.slice';
import createThemeSlice from '@/store/slices/theme.slice';

import type { CreateStore, GetProperStoreData, StateFromFunctions } from '@/types/store';

export type StoreState = StateFromFunctions<[typeof createAuthSlice, typeof createThemeSlice]>;

const getProperStoreData: GetProperStoreData = initialState => {
  if (initialState?.user) return setUser(initialState.user);

  return {};
};

const createStore: CreateStore = initialState => {
  const state = getProperStoreData(initialState);

  return createZustandStore<StoreState>()(
    devtools((...a) => ({
      ...createAuthSlice(...a),
      ...createThemeSlice(...a),
      ...state,
    }))
  );
};

export default createStore;
