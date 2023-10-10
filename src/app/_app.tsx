'use client';

import React from 'react';

import Header from '@/components/header/Header';
import { useStore } from '@/store';

import type { Layout } from '@/types/common';

const App: Layout = ({ children }) => {
  const store = useStore(state => state);
  console.log(store);

  return (
    <main id="main">
      <Header />
      {children}
    </main>
  );
};

export default App;
