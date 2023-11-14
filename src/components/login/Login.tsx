import React from 'react';

import { useForm } from 'react-hook-form';

import styles from '@/components/login/Login.module.css';
import { useLogin } from '@/features/auth/useLogin';
import { useFetchUser } from '@/features/user/useUser';

import type { Component, Layout } from '@/types/common';
import type { SubmitHandler } from 'react-hook-form';

interface FormControlProps {
  label: string;
  labelFor: string;
  error?: string;
}

const FormControl: Layout<FormControlProps> = ({ children, label, labelFor, error }) => (
  <div className={styles.wrapper}>
    <label className={styles.label} htmlFor={labelFor}>
      {label}
    </label>
    {children}
    {error ? <p className={styles.error}>{error}</p> : null}
  </div>
);

interface FormData {
  email: string;
  password: string;
}

const Login: Component = () => {
  const { mutateAsync, isPending: isLogging } = useLogin();
  const { isLoading: isFetching, fetchUser } = useFetchUser();
  const isLoading = isLogging || isFetching;

  const { formState, register, handleSubmit: onSubmit } = useForm<FormData>();
  const { errors } = formState;

  const handleSubmit: SubmitHandler<FormData> = async data => {
    await mutateAsync(data);
    await fetchUser();
  };

  return (
    <form className={styles.container} onSubmit={onSubmit(handleSubmit)}>
      <FormControl label="Email" labelFor="temp_email" error={errors.email?.message}>
        <input
          {...register('email', { required: 'Email is required' })}
          className={styles.input}
          id="temp_email"
          type="text"
        />
      </FormControl>
      <FormControl label="Password" labelFor="temp_password" error={errors.password?.message}>
        <input
          {...register('password', { required: 'Password is required' })}
          className={styles.input}
          id="temp_password"
          type="password"
        />
      </FormControl>
      <div>
        <button className={styles.btn} type="submit" disabled={isLoading}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
