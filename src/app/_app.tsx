'use client';

import React from 'react';

import Header from '@/components/header/Header';
import { useUser } from '@/features/user/useUser';

import type { GetProfileOutput } from '@/features/auth/auth.type';
import type { Layout } from '@/types/common';

type Props = Record<'user', GetProfileOutput | undefined>;

const App: Layout<Props> = ({ children, user }) => {
  useUser(user);

  return (
    <main id="main">
      <Header />
      {children}
    </main>
  );
};

export default App;
