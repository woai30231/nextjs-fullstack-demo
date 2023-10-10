'use client';

import { redirect } from 'next/navigation';

import { useStore } from '@/store';

import type { Layout } from '@/types/common';

const AppLayout: Layout = ({ children }) => {
  const isAuthenticated = useStore(state => state.isAuthenticated);

  if (isAuthenticated) return redirect('/app');

  return children;
};

export default AppLayout;
