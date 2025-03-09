import React, { Suspense } from 'react';

import App from '@/app/app';
import constants from '@/constants';
import { getProfileApi } from '@/features/profile/profile.api';
import cookieStore from '@/lib/cookieStore';
import Loader from '@/shared/loader/Loader';
import { interFont } from '@/styles/font';
import '@/styles/globals.css';

import type { Layout } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: constants.APP_NAME,
  description: `${constants.APP_NAME} Description`,
};

const RootLayout: Layout = async ({ children }) => {
  const user = await (async () => {
    const hasToken = !!(await cookieStore.getAsync(constants.COOKIES.TOKEN_NAME));
    if (!hasToken) return;

    return await getProfileApi({}, { throwError: false });
  })();

  return (
    <html lang="en">
      <body className={interFont.className}>
        <Suspense fallback={<Loader />}>
          <App user={user}>{children}</App>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
