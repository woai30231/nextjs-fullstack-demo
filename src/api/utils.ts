import { AxiosError } from 'axios';

import { AppError } from '@/utils/appError';

export const throwAxiosError = (err: unknown): void => {
  const STATUS_CODE = 400;

  const message = err instanceof AxiosError ? err.response?.data.message : err;
  const statusCode = err instanceof AxiosError ? err.response?.status ?? STATUS_CODE : STATUS_CODE;
  throw new AppError(message, statusCode, { error: err });
};
