import React from 'react';

import Image from 'next/image';

import styles from '@/components/dashboard/Dashboard.module.css';
import { useStore } from '@/store';

import type { Component } from '@/types/common';

const Dashboard: Component = () => {
  const user = useStore(state => state.user);

  if (!user) return null;

  return (
    <div className={styles.container}>
      <Image src={user.avatar} alt={user.name} width="100" height="100" />
      <p>ID: {user.id}</p>
      <p>Full Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
