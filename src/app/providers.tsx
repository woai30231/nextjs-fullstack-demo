'use client';

import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import App from '@/app/_app';
import queryClient from '@/config/queryClient';
import ZustandProvider from '@/context/ZustandProvider';
import ProgressBar from '@/shared/loader/ProgressBar';

import type { GetProfileOutput } from '@/features/profile/profile.type';
import type { Mode } from '@/store/slices/theme.slice';
import type { Layout } from '@/types';

interface Props {
  user: GetProfileOutput | undefined;
  mode: Mode;
}

const Providers: Layout<Props> = ({ children, user, mode }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <ToastContainer pauseOnFocusLoss={false} autoClose={5000} closeOnClick hideProgressBar />
    <ZustandProvider initialState={{ user, mode }}>
      <ProgressBar />
      <App>{children}</App>
    </ZustandProvider>
  </QueryClientProvider>
);

export default Providers;
