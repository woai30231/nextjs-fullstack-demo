'use client';

import React, { Fragment } from 'react';

import Users from '@/components/users/Users';

import type { Component } from '@/types';

const UsersPage: Component = () => (
  <Fragment>
    <h1 className="text-center">Hello, Protected Route</h1>
    <Users />
  </Fragment>
);

export default UsersPage;
