import React from 'react';

import { Inter } from 'next/font/google';

import Providers from '@/app/providers';
import { getProfileApi } from '@/features/auth/auth.api';
import '@/styles/globals.css';

import type { Layout } from '@/types/common';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'Next.js Template Description',
};

const RootLayout: Layout = async ({ children }) => {
  const user = await getProfileApi({}, { throwError: false });

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers user={user}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
