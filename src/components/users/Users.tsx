import React from 'react';

import Image from 'next/image';

import styles from '@/components/users/Users.module.css';
import { useUsers } from '@/features/users/useUsers';
import Loader from '@/shared/loader/Loader';
import { isProcessing } from '@/utils/utils';

import type { Component } from '@/types';

const Users: Component = () => {
  const { isLoading, data: users } = useUsers();

  if (isProcessing(users, isLoading)) return <Loader />;

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableRow}>
            <th className={styles.tableHead} aria-label="image" />
            <th className={styles.tableHead}>ID</th>
            <th className={styles.tableHead}>Full Name</th>
            <th className={styles.tableHead}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 10).map(user => (
            <tr className={styles.tableRow} key={user.id}>
              <td className={`${styles.img} ${styles.tableData}`}>
                <Image src={user.avatar} alt={user.name} width="100" height="100" />
              </td>
              <td className={styles.tableData}>{user.id}</td>
              <td className={styles.tableData}>{user.name}</td>
              <td className={styles.tableData}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
