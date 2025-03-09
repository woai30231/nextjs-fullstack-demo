'use client';

import React, { useEffect } from 'react';

import constants from '@/constants';
import WebsiteLoader from '@/shared/loader/WebsiteLoader';
import { useStore } from '@/store';
import { sleep } from '@/utils';

import type { Component } from '@/types';

const AppClient: Component = () => {
  const isLoading = useStore((state) => state.isLoading);
  const setLoading = useStore((state) => state.setLoading);
  const setPreferredMode = useStore((state) => state.setPreferredMode);

  const handleColorSchema = (event: MediaQueryListEvent) => {
    const { LIGHT, DARK } = constants.THEME;
    const newTheme = event.matches ? DARK : LIGHT;
    setPreferredMode(newTheme);
  };

  useEffect(() => {
    (async () => {
      await sleep(constants.STARTUP_PROGRESS_BAR_TIMEOUT);
      setLoading(false);
    })();
  }, [setLoading]);

  useEffect(() => {
    const matchMedia = globalThis.matchMedia('(prefers-color-scheme: dark)');

    matchMedia.addEventListener('change', handleColorSchema);
    return () => matchMedia.removeEventListener('change', handleColorSchema);
  }, []);

  return isLoading ? <WebsiteLoader /> : null;
};

export default AppClient;
