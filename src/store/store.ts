import { createStore as createZustandStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import createAuthSlice, { getUser } from '@/store/slices/auth.slice';
import createLoadingSlice from '@/store/slices/loading.slice';
import createThemeSlice, { getMode } from '@/store/slices/theme.slice';

import type { CreateStore, GetProperStoreData, StateFromFunctions } from '@/types/store';

export type StoreState = StateFromFunctions<
  [typeof createAuthSlice, typeof createLoadingSlice, typeof createThemeSlice]
>;

const getProperStoreData: GetProperStoreData = initialState => {
  let newState = {};

  if (initialState?.user) {
    const state = getUser(initialState.user);
    newState = { ...newState, ...state };
  }

  if (initialState?.mode) {
    const state = getMode(initialState.mode);
    newState = { ...newState, ...state };
  }

  return newState;
};

const createStore: CreateStore = initialState => {
  const state = getProperStoreData(initialState);

  return createZustandStore<StoreState>()(
    devtools((...a) => ({
      ...createAuthSlice(...a),
      ...createLoadingSlice(...a),
      ...createThemeSlice(...a),
      ...state,
    }))
  );
};

export default createStore;
