'use client';

import React, { useEffect, useState } from 'react';

import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';

import store from '@/store/store';

import type { ReactNode } from 'react';

import '@/app/globals.css';
import { getProfileAction } from '@/store/features/auth/actions';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    store.dispatch(getProfileAction());
    setLoader(true);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
