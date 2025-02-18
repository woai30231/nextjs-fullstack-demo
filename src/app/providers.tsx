'use client';

import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import App from '@/app/app';
import queryClient from '@/config/queryClient';
import ZustandProvider from '@/context/ZustandProvider';
import ProgressBar from '@/shared/loader/ProgressBar';

import type { Layout } from '@/types';
import type { ProvidersProps } from '@/types/initialState.type';

const Providers: Layout<ProvidersProps> = ({ children, initialState }) => (
  <QueryClientProvider client={queryClient}>
    <ZustandProvider initialState={initialState}>
      <App>{children}</App>
      <ProgressBar />
    </ZustandProvider>
    <ReactQueryDevtools />
    <ToastContainer pauseOnFocusLoss={false} autoClose={5000} closeOnClick hideProgressBar />
  </QueryClientProvider>
);

export default Providers;
