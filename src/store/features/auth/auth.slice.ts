import { createSlice } from '@reduxjs/toolkit';

import tokenStore from '@/storage/client';

import type { AuthSliceState } from '@/store/features/auth/type';
import type { TokenOutput } from '@/types/Axios';
import type { MeRes } from '@/types/schemas/Profile';
import type { PayloadAction } from '@reduxjs/toolkit';

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
      state.token = tokenStore.get() || '';
      state.user = action.payload;
    },
    loginAction: (state, action: PayloadAction<TokenOutput['token']>) => {
      const { payload } = action;
      state.token = payload;
      tokenStore.set(payload);
    },
    logoutAction: (state: AuthSliceState) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      tokenStore.delete();
      console.log('logging out...');
    },
  },
});

export default authSlice;
