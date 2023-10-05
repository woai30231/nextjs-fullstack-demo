'use client';

import React from 'react';

import type { Component, GlobalErrorType } from '@/types/Common';

const GlobalError: Component<GlobalErrorType> = ({ error, reset }) => (
  <div>
    <h1>Something went wrong</h1>
    <p>{error.message ?? ''}</p>
    <button type="button" onClick={reset}>
      Try Again
    </button>
  </div>
);

export default GlobalError;
