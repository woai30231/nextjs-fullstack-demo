import { QueryCache, QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import type { QueryClientConfig } from '@tanstack/react-query';

const options: QueryClientConfig = {
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (!query.meta?.noErrorMessage) {
        const message = error instanceof Error ? error.message : 'Something went wrong';
        toast.error(message);
      }
    },
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 10000,
    },
  },
};

const queryClient = new QueryClient(options);

export default queryClient;
