import React from 'react';

import Logout from '@/components/logout/Logout';
import constants from '@/constants';

import type { Component } from '@/types';
import type { Metadata } from 'next';

export const metadata = {
  title: `Logout | ${constants.APP_NAME}`,
} satisfies Metadata;

const LogoutPage: Component = () => <Logout />;

export default LogoutPage;
