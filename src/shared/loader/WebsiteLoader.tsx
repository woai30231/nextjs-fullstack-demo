import React from 'react';

import clsx from 'clsx';
import Image from 'next/image';

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
    <Image src={logo} alt="logo-img" />
  </div>
);

export default WebsiteLoader;
