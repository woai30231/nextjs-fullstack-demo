'use client';

import React from 'react';

import Link from 'next/link';

import type { Component } from '@/types/Common';

const Home: Component = () => (
  <div>
    <div>
      <Link href="/login">Login</Link>
    </div>
    <div>
      <Link href="/app">App</Link>
    </div>
  </div>
);

export default Home;
