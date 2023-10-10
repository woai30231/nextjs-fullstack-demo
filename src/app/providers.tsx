'use client';

import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import App from '@/app/_app';
import queryClient from '@/config/queryClient';
import ZustandProvider from '@/context/ZustandProvider';

import type { GetProfileOutput } from '@/features/auth/auth.type';
import type { Layout } from '@/types/common';

type Props = Record<'user', GetProfileOutput | undefined>;

const Providers: Layout<Props> = ({ children, user }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <ToastContainer pauseOnFocusLoss={false} />
    <ZustandProvider>
      <App>{children}</App>
    </ZustandProvider>
  </QueryClientProvider>
);

export default Providers;
