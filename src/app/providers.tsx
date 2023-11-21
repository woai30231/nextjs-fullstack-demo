'use client';

import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import App from '@/app/_app';
import queryClient from '@/config/queryClient';
import ZustandProvider from '@/context/ZustandProvider';

import type { Layout } from '@/types';
import type { ZustandInitialState } from '@/types/store';

const Providers: Layout<ZustandInitialState> = ({ children, initialState }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <ToastContainer pauseOnFocusLoss={false} />
    <ZustandProvider initialState={initialState}>
      <App>{children}</App>
    </ZustandProvider>
  </QueryClientProvider>
);

export default Providers;
