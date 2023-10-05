'use client';

import React from 'react';

import { Provider } from 'react-redux';

import Header from '@/components/header/Header';
import store from '@/store/store';

import type { Layout } from '@/types/Common';
import type { MeRes } from '@/types/schemas/Profile';

interface Props {
  user: MeRes | undefined;
}

const App: Layout<Props> = ({ children, user }) => (
  <Provider store={store}>
    <Header />
    {children}
  </Provider>
);

export default App;
