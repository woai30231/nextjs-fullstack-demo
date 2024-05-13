import React from 'react';

import clsx from 'clsx';

import logo from '@/assets/next.svg';

import type { Component } from '@/types';

interface WebsiteLoaderType {
  transparent?: boolean;
}

const WebsiteLoader: Component<WebsiteLoaderType> = ({ transparent = true }) => (
  <div
    className={clsx('website-loader', {
      'website-loader-transparent': transparent,
    })}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={logo.src} alt="logo-img" />
  </div>
);

export default WebsiteLoader;
