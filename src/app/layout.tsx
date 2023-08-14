'use client';

import React, { useEffect, useState } from 'react';

import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';

import { getProfile } from '@/api';
import Loader from '@/shared/Loader';
import { getProfileAction } from '@/store/features/auth';
import store from '@/store/store';
import catchAsync from '@/utils/catchAsync';

import type { Layout } from '@/types/Common';

import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

const RootLayout: Layout = ({ children }) => {
  const [loader, setLoader] = useState(true);

  const getData = async () => {
    await catchAsync(async (check) => {
      const res = await getProfile({ data: { platform: 1 } });

      if (check(res, true)) store.dispatch(getProfileAction(res.data.data));
    });
  };

  useEffect(() => {
    (async () => {
      await getData();
      setLoader(false);
    })();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{loader ? <Loader /> : children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
