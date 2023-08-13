import authSlice from '@/store/features/auth/auth.slice';

import type { RootState } from '@/store';

export const authReducer = authSlice.reducer;

export const getIsAuthenticated = (state: RootState): boolean => state.auth.isAuthenticated;

export const getUser = (state: RootState) => state.auth.user;
