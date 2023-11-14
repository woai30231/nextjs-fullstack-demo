import { throwAxiosError } from '@/api/utils';

import type { AxiosSignal } from '@/types/axios';
import type { Promisable } from 'type-fest';

type DefaultParamsInput = AxiosSignal;

interface CatchAsyncOptions {
  throwError?: boolean;
}

type CatchAsyncInput<T, R> = (data: T, options?: CatchAsyncOptions) => Promise<R>;

type CatchAsyncOutput<T, R, E> = (
  data: T,
  options?: CatchAsyncOptions
) => Promise<R | E | undefined>;

type ErrorCB<E> = (err: unknown) => Promisable<E>;

type CatchAsync = <I, R, E = undefined, T = I & DefaultParamsInput>(
  fn: CatchAsyncInput<T, R>,
  errorCB?: ErrorCB<E>
) => CatchAsyncOutput<T, R, E>;

const catchAsync: CatchAsync =
  (fn, errorCB = undefined) =>
  async (data, options = {}) => {
    const { throwError = true } = options;

    try {
      return await fn(data, options);
    } catch (err) {
      if (throwError) throwAxiosError(err);
      return errorCB ? errorCB(err) : undefined;
    }
  };

export default catchAsync;
