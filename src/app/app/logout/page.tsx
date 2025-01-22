'use client';

import React, { Fragment, useEffect } from 'react';

import type { Component } from '@/types';
import { useLogout } from '@/features/profile/useLogout';
import { useRouter } from '@/hooks/useRouter';

const LogoutPage: Component = () => {
  const router = useRouter();
  const { mutateAsync: logout } = useLogout();

  useEffect(() => {
    (async () => {
      try {
        await logout({});
      } catch {}

      router.push('/');
    })();
  }, []);

  return (
    <Fragment>
      <h1 className="text-center">Logging you out...</h1>
    </Fragment>
  );
};

export default LogoutPage;
