import React from 'react';

import Link from 'next/link';

import styles from '@/components/header/Header.module.css';

import type { Component } from '@/types/Common';

const Header: Component = () => (
  <div className={styles.container}>
    <Link className={styles.link} href="/">
      Home
    </Link>
    <Link className={styles.link} href="/login">
      Login
    </Link>
    <Link className={styles.link} href="/app">
      App
    </Link>
  </div>
);

export default Header;
