'use client';

import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Header from '@/components/header/Header';
import queryClient from '@/config/queryClient';
import store from '@/store/store';

import type { Layout } from '@/types/Common';
import type { MeRes } from '@/types/schemas/Profile';

interface Props {
  user: MeRes | undefined;
}

const App: Layout<Props> = ({ children, user }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <ToastContainer />
    <Provider store={store}>
      <Header />
      {children}
    </Provider>
  </QueryClientProvider>
);

export default App;
