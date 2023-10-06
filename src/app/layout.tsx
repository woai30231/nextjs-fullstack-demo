import React from 'react';

import { Inter } from 'next/font/google';

import Providers from '@/app/providers';
import { getProfile } from '@/features/user/useUser';
import serverTokenStore from '@/storage/server';

import type { Layout } from '@/types/common';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const RootLayout: Layout = async ({ children }) => {
  let user;

  try {
    user = await getProfile(serverTokenStore.get());
  } catch (err) {
    console.error(err);
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers user={user}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
