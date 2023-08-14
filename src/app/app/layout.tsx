'use client';

import { redirect } from 'next/navigation';

import { useAppSelector } from '@/store';

import type { Layout } from '@/types/Common';

const AppLayout: Layout = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) redirect('/login');

  return children;
};

export default AppLayout;
