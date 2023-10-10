import type { StoreState } from '@/store/store';
import type { StoreApi } from 'zustand';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export type StateFromFunctions<T extends [...any]> = T extends [infer F, ...infer R]
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;

export type ZustandStoreApi = StoreApi<StoreState>;

export type CreateStore = (initialState?: Partial<StoreState>) => StoreApi<StoreState>;

export type UseStore = <T>(selector: (state: StoreState) => T) => T;
