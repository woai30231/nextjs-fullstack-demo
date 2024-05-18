import React from 'react';

import Providers from '@/app/providers';
import constants from '@/constants';
import { getProfileApi } from '@/features/profile/profile.api';
import cookieStore from '@/lib/cookieStore';
import { getMode } from '@/store/slices/theme/theme.slice';
import { interFont } from '@/styles/font';
import '@/styles/style.css';

import type { Layout } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'Next.js Template Description',
};

const RootLayout: Layout = async ({ children }) => {
  const modeStr = await cookieStore.getAsync(constants.cookies.themeName);
  const { mode } = getMode(modeStr);

  const { user } = await (async () => {
    const defaults = { user: undefined };

    const hasToken = await cookieStore.getAsync();

    if (hasToken) {
      const userData = await getProfileApi({}, { throwError: false });
      return { ...defaults, user: userData };
    }

    return defaults;
  })();

  return (
    <html lang="en" className={`${mode}-mode`}>
      <body className={interFont.className}>
        <Providers user={user} mode={mode}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
