'use client';

import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import App from '@/app/_app';
import queryClient from '@/config/queryClient';

import type { MeRes } from '@/features/user/user.type';
import type { Layout } from '@/types/common';

type Props = Record<'user', MeRes | undefined>;

const Providers: Layout<Props> = ({ children, user }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <ToastContainer />
    <App user={user}>{children}</App>
  </QueryClientProvider>
);

export default Providers;
