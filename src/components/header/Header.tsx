import React from 'react';

import Link from 'next/link';

import styles from '@/components/header/Header.module.css';
import { useStore } from '@/store';

import type { Component } from '@/types/common';

const Header: Component = () => {
  const logout = useStore(state => state.logout);
  const isDarkMode = useStore(state => state.isDarkMode);
  const setMode = useStore(state => state.setMode);
  const isAuthenticated = useStore(state => state.isAuthenticated);

  return (
    <div className={styles.container}>
      <div>
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
      <div className={styles.btnWrapper}>
        <button type="button" className={styles.btn} onClick={setMode}>
          Current: {isDarkMode ? 'Dark' : 'Light'}
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
