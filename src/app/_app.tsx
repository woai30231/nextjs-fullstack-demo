'use client';

import React, { Fragment, Suspense, useEffect } from 'react';

import Header from '@/components/header/Header';
import constants from '@/constants';
import cookieStore from '@/lib/cookieStore';
import Loader from '@/shared/loader/Loader';
import WebsiteLoader from '@/shared/loader/WebsiteLoader';
import { useStore } from '@/store';
import { detectMode, setModeClient } from '@/store/slices/theme/theme.slice';

import type { Layout } from '@/types';

const App: Layout = ({ children }) => {
  const isLoading = useStore(state => state.isLoading);
  const setLoading = useStore(state => state.setLoading);
  const setMode = useStore(state => state.setMode);

  useEffect(() => {
    const mode = cookieStore.get(constants.cookies.themeName);
    if (mode) return;

    const detectedMode = detectMode();
    setModeClient(detectedMode);
    setMode(detectedMode);
  }, [setMode]);

  useEffect(() => {
    (async () => {
      await new Promise(resolve => {
        setTimeout(resolve, constants.progressBarDelay);
      });

      setLoading(false);
    })();
  }, [setLoading]);

  return (
    <Fragment>
      {isLoading && <WebsiteLoader />}
      <Suspense fallback={<Loader />}>
        <main id="main">
          <Header />
          {children}
        </main>
      </Suspense>
    </Fragment>
  );
};

export default App;
