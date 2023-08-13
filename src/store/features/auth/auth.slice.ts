import { createSlice } from '@reduxjs/toolkit';

import config from '@/config';
import { getProfileAction, loginAction } from '@/store/features/auth/actions';

import type { AuthSliceState } from '@/store/features/auth/type';
import type { PayloadAction } from '@reduxjs/toolkit';

const { tokenName } = config;

const logout = (state: AuthSliceState) => {
  state.isAuthenticated = false;
  state.token = null;
  state.user = null;
  localStorage.removeItem(tokenName);
  console.log('logging out...');
};

const initialState: AuthSliceState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileAction.fulfilled, (state) => {
      state.isAuthenticated = true;
    });

    builder.addCase(getProfileAction.rejected, logout);

    builder.addCase(loginAction.fulfilled, (state, action) => {
      const { token } = action.payload;
      state.token = token;
      localStorage.setItem(tokenName, token);
    });
  },
});

export default authSlice;
