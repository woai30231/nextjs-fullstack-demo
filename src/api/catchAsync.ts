import { throwAxiosError } from '@/api/utils';

import type { Promisable } from 'type-fest';

import type { AxiosSignal, PaginatedOutput } from '@/types/axios.type';

type DefaultParamsInput = AxiosSignal;

interface CatchAsyncOptions {
  throwError?: boolean;
}

type CatchAsyncOutputCond<T, P> = P extends true ? PaginatedOutput<T> : P extends false ? T[] : T;

type CatchAsyncInput<T, R, P> = (
  data: T,
  options?: CatchAsyncOptions,
) => Promise<CatchAsyncOutputCond<R, P>>;

type CatchAsyncOutput<T, R, P, E> = (
  data: T,
  options?: CatchAsyncOptions,
) => Promise<CatchAsyncOutputCond<R, P> | E | undefined>;

type ErrorCB<E> = (error: unknown) => Promisable<E>;

type CatchAsync = <I, R, P = unknown | boolean, E = undefined, T = I & DefaultParamsInput>(
  fn: CatchAsyncInput<T, R, P>,
  errorCB?: ErrorCB<E>,
) => CatchAsyncOutput<T, R, P, E>;

const catchAsync: CatchAsync =
  (fn, errorCB?) =>
  async (data, options = {}) => {
    const { throwError = true } = options;

    try {
      return await fn(data, options);
    } catch (error) {
      if (throwError) throwAxiosError(error);
      return errorCB ? errorCB(error) : undefined;
    }
  };

export default catchAsync;
