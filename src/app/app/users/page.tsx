import React, { Fragment } from 'react';

import Users from '@/components/users/Users';
import constants from '@/constants';

import type { Component } from '@/types';
import type { Metadata } from 'next';

export const metadata = {
  title: `Users | ${constants.APP_NAME}`,
} satisfies Metadata;

const UsersPage: Component = () => (
  <Fragment>
    <h1 className="text-center">Hello, Protected Route</h1>
    <Users />
  </Fragment>
);

export default UsersPage;
