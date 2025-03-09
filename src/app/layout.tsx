import React, { Suspense } from 'react';

import App from '@/app/app';
import constants from '@/constants';
import { getProfileApi } from '@/features/profile/profile.api';
import cookieStore from '@/lib/cookieStore';
import Loader from '@/shared/loader/Loader';
import { getMode, getPreferredMode } from '@/store/slices/theme/theme.slice';
import { interFont } from '@/styles/font';
import '@/styles/globals.css';

import type { Layout } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: constants.APP_NAME,
  description: `${constants.APP_NAME} Description`,
};

const RootLayout: Layout = async ({ children }) => {
  const { mode, preferredMode, theme } = await (async () => {
    const [modeString, preferredModeString] = await Promise.all([
      cookieStore.getAsync(constants.COOKIES.THEME_NAME),
      cookieStore.getAsync(constants.COOKIES.SYSTEM_THEME),
    ]);

    const themeMode = getMode(modeString);
    const preferredThemeMode = getPreferredMode(preferredModeString);

    if (!modeString) {
      cookieStore.set(constants.COOKIES.THEME_NAME, themeMode);
      cookieStore.set(constants.COOKIES.SYSTEM_THEME, themeMode);
    }

    if (!preferredModeString) {
      cookieStore.set(constants.COOKIES.SYSTEM_THEME, preferredThemeMode);
    }

    const dataTheme = themeMode === constants.THEME.SYSTEM ? preferredThemeMode : themeMode;

    return { mode: themeMode, preferredMode: preferredThemeMode, theme: dataTheme };
  })();

  const user = await (async () => {
    const hasToken = !!(await cookieStore.getAsync(constants.COOKIES.TOKEN_NAME));
    if (!hasToken) return;

    return await getProfileApi({}, { throwError: false });
  })();

  return (
    <html lang="en" data-theme={theme}>
      <body className={interFont.className}>
        <Suspense fallback={<Loader />}>
          <App user={user} mode={mode} preferredMode={preferredMode}>
            {children}
          </App>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
