import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { AppError } from '@/utils/appError';

import type { AxiosErr, AxiosRes } from '@/types/axios';

export const throwAxiosError = (err: unknown): void => {
  const STATUS_CODE = 400;

  const message = err instanceof AxiosError ? err.response?.data.message : err;
  const statusCode = err instanceof AxiosError ? err.response?.status ?? STATUS_CODE : STATUS_CODE;
  throw new AppError(message, statusCode, {
    error: err,
    ...(err instanceof AxiosError ? { res: err.response?.data ?? null } : null),
  });
};

export const showToast = (res: AxiosRes | AxiosErr): void => {
  const { config } = res;
  const { manageToast } = config;

  const isError = res instanceof AxiosError;

  const responseData = (() => {
    if (isError) return res.response?.data;

    return 'data' in res ? res.data : null;
  })();

  const shouldShowToast =
    typeof manageToast === 'function' ? manageToast(responseData) : !!manageToast;

  if (!shouldShowToast) return;

  const toastMsg = responseData?.message ?? 'Something went wrong';
  const call = isError ? 'error' : 'success';
  toast[call](toastMsg);
};
