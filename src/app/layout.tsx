import React from 'react';

import Providers from '@/app/providers';
import tokenStore from '@/config/tokenStore';
import { getProfileApi } from '@/features/auth/auth.api';
import { interFont } from '@/styles/font';
import '@/styles/style.css';

import type { Layout } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'Next.js Template Description',
};

const RootLayout: Layout = async ({ children }) => {
  const { user } = await (async () => {
    const defaults = { user: undefined };

    const hasToken = await tokenStore.getAsync();

    if (hasToken) {
      const userData = await getProfileApi({}, { throwError: false });
      return { ...defaults, user: userData };
    }

    return defaults;
  })();

  return (
    <html lang="en">
      <body className={interFont.className}>
        <Providers user={user}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
