import React from 'react';

import { AppProgressBar } from 'next-nprogress-bar';
import ReactDOMServer from 'react-dom/server';

import WebsiteLoader from '@/shared/loader/WebsiteLoader';
import { isLive } from '@/utils/utils';

import type { Component } from '@/types';

export const PROGRESS_BAR_DELAY = isLive ? 200 : 500;

const ProgressBar: Component = () => {
  const loader = ReactDOMServer.renderToString(<WebsiteLoader />);

  const template = `
    <div class="bar" role="bar">
      <div class="peg"></div>
    </div>
    ${loader}
  `;

  return (
    <AppProgressBar
      color="var(--bs-dark)"
      stopDelay={PROGRESS_BAR_DELAY}
      options={{ showSpinner: false, template }}
    />
  );
};

export default ProgressBar;
