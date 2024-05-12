'use client';

import React, { Fragment } from 'react';

import { redirect } from 'next/navigation';

import { useStore } from '@/store';

import type { Layout } from '@/types';

const AuthLayout: Layout = ({ children }) => {
  const isAuthenticated = useStore(state => state.isAuthenticated);

  if (isAuthenticated) return redirect('/app');

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <Fragment>{children}</Fragment>;
};

export default AuthLayout;
