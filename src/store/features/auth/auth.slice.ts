import { createSlice } from '@reduxjs/toolkit';

import config from '@/config';

import type { AuthSliceState } from '@/store/features/auth/type';
import type { TokenOutput } from '@/types/Axios';
import type { MeRes } from '@/types/schemas/Profile';
import type { PayloadAction } from '@reduxjs/toolkit';

const { tokenName } = config;

const initialState: AuthSliceState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getProfileAction: (state, action: PayloadAction<MeRes>) => {
      state.isAuthenticated = true;
      state.token = localStorage.getItem(tokenName);
      state.user = action.payload;
    },
    loginAction: (state, action: PayloadAction<TokenOutput['token']>) => {
      const { payload } = action;
      state.token = payload;
      localStorage.setItem(tokenName, payload);
    },
    logoutAction: (state: AuthSliceState) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem(tokenName);
      console.log('logging out...');
    },
  },
});

export default authSlice;
