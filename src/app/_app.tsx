'use client';

import React from 'react';

import Header from '@/components/header/Header';
import { useUser } from '@/features/user/useUser';

import type { MeRes } from '@/features/user/user.type';
import type { Layout } from '@/types/common';

type Props = Record<'user', MeRes | undefined>;

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
