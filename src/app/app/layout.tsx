'use client';

import React, { Fragment } from 'react';

import { redirect } from 'next/navigation';

import { useStore } from '@/store';

import type { Layout } from '@/types';

const AppLayout: Layout = ({ children }) => {
  const isAuthenticated = useStore(state => state.isAuthenticated);

  if (!isAuthenticated) return redirect('/login');

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <Fragment>{children}</Fragment>;
};

export default AppLayout;
