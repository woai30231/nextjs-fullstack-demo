'use client';

import React from 'react';

import Link from 'next/link';

import type { Component } from '@/types/Common';

const Home: Component = () => {
  console.log('lol');
  return (
    <div>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Home;
