import React from 'react';

import { Inter } from 'next/font/google';

import Providers from '@/app/providers';
import { getProfile } from '@/features/auth/auth.api';
import serverTokenStore from '@/storage/server';
import '@/styles/globals.css';

import type { Layout } from '@/types/common';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'Next.js Template Description',
};

const RootLayout: Layout = async ({ children }) => {
  let user;

  try {
    user = await getProfile({ token: serverTokenStore.get() });
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
