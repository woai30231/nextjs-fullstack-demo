import React from 'react';

import Link from 'next/link';

import styles from '@/components/header/Header.module.css';
import { useStore } from '@/store';

import type { Component } from '@/types';

const Header: Component = () => {
  const logout = useStore(state => state.logout);
  const mode = useStore(state => state.mode);
  const setMode = useStore(state => state.setMode);
  const isAuthenticated = useStore(state => state.isAuthenticated);

  return (
    <div className={styles.container}>
      <div>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <Link className={styles.link} href="/login">
          Login
        </Link>
        <Link className={styles.link} href="/app">
          App
        </Link>
        {isAuthenticated && (
          <Link className={styles.link} href="/app/users">
            Users
          </Link>
        )}
      </div>
      <div className={styles.btnWrapper}>
        <button
          type="button"
          className={styles.btn}
          onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        >
          Current: {mode === 'dark' ? 'Dark' : 'Light'}
        </button>
        {isAuthenticated && (
          <button type="button" className={styles.btn} onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
