import type { StoreState } from '@/store';
import type { ZustandState } from '@/types/zustandState.type';
import type { StateCreator, StoreApi } from 'zustand';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StateFromFunctions<T extends [...any]> = T extends [infer F, ...infer R]
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;

export type ZustandStore = StoreApi<StoreState>;

export type ZustandContextValue = ZustandStore;

export type CreateStore = (state: Partial<ZustandState>) => ZustandStore;

export type UseStore = <T>(selector: (state: StoreState) => T) => T;

export type SliceCreator<T> = StateCreator<T, [['zustand/devtools', never]]>;
