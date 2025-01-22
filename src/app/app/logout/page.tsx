'use client';

import React, { Fragment, useEffect } from 'react';

import type { Component } from '@/types';
import { useLogout } from '@/features/profile/useLogout';

const LogoutPage: Component = () => {
  const { mutateAsync: logout } = useLogout();

  useEffect(() => {
    (async () => {
      await logout({});
    })();
  }, []);

  return (
    <Fragment>
      <h1 className="text-center">Logging you out...</h1>
    </Fragment>
  );
};

export default LogoutPage;
