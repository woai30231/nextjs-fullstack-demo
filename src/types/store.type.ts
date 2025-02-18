import type { StoreState } from '@/store/store';
import type { ZustandInitialState } from '@/types/initialState.type';
import type { StateCreator, StoreApi } from 'zustand';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StateFromFunctions<T extends [...any]> = T extends [infer F, ...infer R]
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;

export type ZustandStoreApi = StoreApi<StoreState>;

export type GetProperStoreData = (
  initialState?: ZustandInitialState['initialState'],
) => Partial<StoreState>;

export type CreateStore = (
  initialState?: ZustandInitialState['initialState'],
) => StoreApi<StoreState>;

export type UseStore = <T>(selector: (state: StoreState) => T) => T;

export type SliceCreator<T> = StateCreator<T, [['zustand/devtools', never]]>;
