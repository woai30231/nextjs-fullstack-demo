import { AxiosError } from 'axios';

import type { SuccessOutput } from '@/types/Axios';
import type { AxiosResponse } from 'axios';

type TryCheckInput = <S extends boolean>(
  res: AxiosResponse<SuccessOutput>,
  strict?: S | boolean,
  message?: boolean
) => res is S extends true ? AxiosResponse<Required<SuccessOutput>> : AxiosResponse<SuccessOutput>;

type TryInput<R> = (check: TryCheckInput) => R | Promise<R>;

type CatchInput<R> = ((err: unknown | AxiosError) => R | Promise<R>) | null;

const catchAsync = async <R = void>(
  tryCB: TryInput<R>,
  catchCB?: CatchInput<R>
): Promise<R | unknown> => {
  try {
    const check: TryCheckInput = (res, strict = false, message = true) => {
      if (res.data.status.toString().startsWith('2')) {
        if (strict) return !!res.data.data;
        if (message) console.log('success', res.data.message);
        return true;
      }
      console.log('error', res.data.message);
      return false;
    };

    return await tryCB(check);
  } catch (err) {
    console.debug(err);
    if (catchCB) return await catchCB(err);

    if (err instanceof AxiosError && err.response) {
      console.log('error', err.response.data.message);
    } else {
      console.log('error', 'Something went wrong');
    }
  }
};

export default catchAsync;
