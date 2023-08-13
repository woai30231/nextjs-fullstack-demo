'use client';

import React, { useState } from 'react';

import { useAppDispatch } from '@/store';
import { loginAction } from '@/store/features/auth/actions';
import catchAsync from '@/utils/catchAsync';

import type { NextPage } from 'next';
import type { MouseEvent } from 'react';

const Login: NextPage = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    await catchAsync(async (check) => {
      const data = await dispatch(loginAction({ data: { email, password } }));
      console.log(data.payload);

      if (data.payload) {
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="temp_email">Email</label>
        <input
          id="temp_email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="temp_password">Password</label>
        <input
          id="temp_password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;
