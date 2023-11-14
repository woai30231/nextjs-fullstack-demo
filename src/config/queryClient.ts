import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { isServer } from '@/utils/utils';

import type { SuccessOutput } from '@/types/axios';
import type { QueryClientConfig } from '@tanstack/react-query';

const onSuccess = (data: SuccessOutput) => {
  if (data.message) toast.success(data.message);
};

const onError = (error: unknown) => {
  const defaultMessage = 'Something went wrong';

  const message = (() => {
    if (error instanceof AxiosError) return error.response?.data.message;
    if (error instanceof Error) return error.message;
    return defaultMessage;
  })();

  toast.error(message ?? defaultMessage);
};

const options: QueryClientConfig = {
  queryCache: new QueryCache({
    onSuccess: (data, query) => {
      if (!query.meta?.noMessage) onSuccess(data as SuccessOutput);
    },
    onError: (error, query) => {
      if (!query.meta?.noErrorMessage) onError(error);
    },
  }),
  mutationCache: new MutationCache({
    onSuccess: (data, _, __, mutation) => {
      if (!mutation.meta?.noMessage) onSuccess(data as SuccessOutput);
    },
    onError: (error, _, __, mutation) => {
      if (!mutation.meta?.noErrorMessage) onError(error);
    },
  }),
  defaultOptions: {
    queries: {
      retry: isServer ? 0 : 1,
      staleTime: 10000,
      gcTime: isServer ? Infinity : 1000 * 60 * 5,
    },
  },
};

const queryClient = new QueryClient(options);

export default queryClient;
