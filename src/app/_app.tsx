'use client';

import React from 'react';

import { useQueryClient } from '@tanstack/react-query';

import Header from '@/components/header/Header';
import { transformUserData } from '@/features/user/useUser';

import type { GetProfileOutput } from '@/features/auth/auth.type';
import type { Layout } from '@/types/common';

type Props = Record<'user', GetProfileOutput | undefined>;

const App: Layout<Props> = ({ children, user }) => {
  const queryClient = useQueryClient();
  if (user) queryClient.setQueryData(['user'], transformUserData(user));

  return (
    <main id="main">
      <Header />
      {children}
    </main>
  );
};

export default App;
