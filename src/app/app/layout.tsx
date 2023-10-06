'use client';

import { redirect } from 'next/navigation';

import { useUser } from '@/features/user/useUser';

import type { Layout } from '@/types/common';

const AppLayout: Layout = ({ children }) => {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) redirect('/login');

  return children;
};

export default AppLayout;
