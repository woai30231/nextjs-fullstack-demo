import React from 'react';

import { Inter } from 'next/font/google';

import { getProfile } from '@/api';
import App from '@/app/_app';
import serverTokenStore from '@/storage/server';

import type { Layout } from '@/types/Common';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const profile = async () => {
  try {
    const res = await getProfile({
      data: { platform: 1 },
      headers: {
        token: serverTokenStore.get(),
      },
    });

    return res.data.data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const RootLayout: Layout = async ({ children }) => {
  const data = await profile();

  return (
    <html lang="en">
      <body className={inter.className}>
        <App user={data}>{children}</App>
      </body>
    </html>
  );
};

export default RootLayout;
