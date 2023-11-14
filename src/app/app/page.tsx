'use client';

import React, { Fragment } from 'react';

import Dashboard from '@/components/dashboard/Dashboard';

import type { Component } from '@/types';

const AppPage: Component = () => (
  <Fragment>
    <h1 className="text-center">Hello, Protected Route</h1>
    <Dashboard />
  </Fragment>
);

export default AppPage;
