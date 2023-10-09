import React from 'react';

import Link from 'next/link';

import styles from '@/components/header/Header.module.css';
import queryClient from '@/config/queryClient';
import { useUser } from '@/features/user/useUser';
import tokenStore from '@/storage/client';

import type { Component } from '@/types/common';

const Header: Component = () => {
  const { isAuthenticated } = useUser();

  const handleLogout = async () => {
    tokenStore.delete();
    await queryClient.resetQueries({ queryKey: ['user'], exact: true });
  };

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
      {isAuthenticated && (
        <button type="button" className={styles.btn} onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
