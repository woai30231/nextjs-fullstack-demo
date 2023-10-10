import { createStore as createZustandStore } from 'zustand';

import createAuthSlice, { setUser } from '@/store/slices/auth.slice';

import type { CreateStore, GetProperStoreData, StateFromFunctions } from '@/types/store';

export type StoreState = StateFromFunctions<[typeof createAuthSlice]>;

const getProperStoreData: GetProperStoreData = initialState => {
  if (initialState?.user) return setUser(initialState.user);

  return {};
};

const createStore: CreateStore = initialState => {
  const state = getProperStoreData(initialState);

  return createZustandStore<StoreState>()((...a) => ({
    ...createAuthSlice(...a),
    ...state,
  }));
};

export default createStore;
