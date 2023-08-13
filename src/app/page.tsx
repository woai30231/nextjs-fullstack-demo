'use client';

import React from 'react';

import Link from 'next/link';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  console.log('lol');
  return (
    <div>
      Login
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Home;
