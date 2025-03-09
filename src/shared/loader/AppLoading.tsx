'use client';

import React, { useEffect } from 'react';

import constants from '@/constants';
import WebsiteLoader from '@/shared/loader/WebsiteLoader';
import { useStore } from '@/store';
import { sleep } from '@/utils';

import type { Component } from '@/types';

const AppLoading: Component = () => {
  const isLoading = useStore((state) => state.isLoading);
  const setLoading = useStore((state) => state.setLoading);

  useEffect(() => {
    (async () => {
      await sleep(constants.STARTUP_PROGRESS_BAR_TIMEOUT);
      setLoading(false);
    })();
  }, [setLoading]);

  return isLoading ? <WebsiteLoader /> : null;
};

export default AppLoading;
