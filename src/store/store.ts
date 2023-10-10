import { createStore as createZustandStore } from 'zustand';

import createAuthSlice from '@/store/slices/auth.slice';

import type { CreateStore, StateFromFunctions } from '@/types/store';

export type StoreState = StateFromFunctions<[typeof createAuthSlice]>;

const createStore: CreateStore = initialState => {
  console.log(initialState);

  return createZustandStore<StoreState>()((...a) => ({
    ...createAuthSlice(...a),
  }));
};

export default createStore;
