import React, { useState } from 'react';

import styles from '@/components/login/Login.module.css';

import type { Component } from '@/types/common';
import type { MouseEvent } from 'react';

const Login: Component = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor="temp_email">
          Email
        </label>
        <input
          className={styles.input}
          id="temp_email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor="temp_password">
          Password
        </label>
        <input
          className={styles.input}
          id="temp_password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
