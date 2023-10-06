'use client';

import React, { Fragment } from 'react';

import Login from '@/components/login/Login';

import type { Component } from '@/types/common';

const LoginPage: Component = () => (
  <Fragment>
    <h1 className="text-center">Hello, Non Protected Route</h1>
    <Login />
  </Fragment>
);

export default LoginPage;
