import React, { useState } from 'react';

import { getProfile, login } from '@/api';
import styles from '@/components/login/Login.module.css';
import { useAppDispatch } from '@/store';
import { getProfileAction, loginAction } from '@/store/features/auth';
import catchAsync from '@/utils/catchAsync';

import type { Component } from '@/types/Common';
import type { MouseEvent } from 'react';

const Login: Component = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    await catchAsync(async (check) => {
      const data = await login({ data: { email, password } });

      if (check(data)) {
        dispatch(loginAction(data.data.token));

        const profile = await getProfile({ data: { platform: 1 } });
        if (check(profile, true)) {
          dispatch(getProfileAction(profile.data.data));
        }
      }
    });
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
