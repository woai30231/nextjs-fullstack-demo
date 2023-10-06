import { AxiosError } from 'axios';

export const throwAxiosError = (err: unknown): void => {
  const message = err instanceof AxiosError ? err.response?.data.message : err;
  throw new Error(message);
};
