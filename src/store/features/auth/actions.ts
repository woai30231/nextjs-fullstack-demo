import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfile, login } from '@/api';

export const getProfileAction = createAsyncThunk('auth/getProfile', async () => {
  const response = await getProfile({});
  return response.data;
});

export const loginAction = createAsyncThunk('auth/login', async (data) => {
  const response = await login(data);
  return response.data;
});
