'use client';

import React from 'react';

import Header from '@/components/header/Header';

import type { Layout } from '@/types/common';

const App: Layout = ({ children }) => (
  <main id="main">
    <Header />
    {children}
  </main>
);

export default App;
