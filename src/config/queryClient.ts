import { QueryClient } from '@tanstack/react-query';

import { isServer } from '@/utils/utils';

import type { QueryClientConfig } from '@tanstack/react-query';

const options: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: isServer ? 0 : 1,
      staleTime: 10_000,
      gcTime: isServer ? Infinity : 1000 * 60 * 5,
    },
  },
};

const queryClient = new QueryClient(options);

export default queryClient;
