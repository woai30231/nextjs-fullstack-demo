import React from 'react';

import Providers from '@/app/providers';
import Header from '@/components/header/Header';
import AppLoading from '@/shared/loader/AppLoading';

import type { Layout } from '@/types';
import type { RootLayoutAppProps } from '@/types/zustandState.type';

const App: Layout<RootLayoutAppProps> = ({ children, ...props }) => (
  <Providers {...props}>
    <AppLoading />
    <main id="main">
      <Header />
      {children}
    </main>
  </Providers>
);

export default App;
