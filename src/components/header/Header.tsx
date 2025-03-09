'use client';

import React from 'react';

import Link from 'next/link';

import styles from '@/components/header/Header.module.css';
import { useRouter } from '@/hooks/useRouter';
import { useStore } from '@/store';

import type { Component } from '@/types';

const Header: Component = () => {
  const router = useRouter();

  const mode = useStore((state) => state.mode);
  const setMode = useStore((state) => state.setMode);
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <div className={styles.container}>
      <div>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        {!isAuthenticated && (
          <Link className={styles.link} href="/login">
            Login
          </Link>
        )}
        {isAuthenticated && (
          <Link className={styles.link} href="/app">
            Dashboard
          </Link>
        )}
        {isAuthenticated && (
          <Link className={styles.link} href="/app/users">
            Users
          </Link>
        )}
      </div>
      <div className={styles.btnWrapper}>
        <button type="button" className={styles.btn} onClick={() => setMode(undefined)}>
          Mode: <span className={styles.capitalize}>{mode}</span>
        </button>
        {isAuthenticated && (
          <button type="button" className={styles.btn} onClick={() => router.push('/app/logout')}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
