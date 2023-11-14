'use client';

import React from 'react';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import type { Component, GlobalErrorType } from '@/types';

const GlobalError: Component<GlobalErrorType> = ({ error, reset }) => {
  const { reset: queryReset } = useQueryErrorResetBoundary();

  const handleReset = () => {
    reset();
    queryReset();
  };

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message ?? ''}</p>
      <button type="button" onClick={handleReset}>
        Try Again
      </button>
    </div>
  );
};

export default GlobalError;
