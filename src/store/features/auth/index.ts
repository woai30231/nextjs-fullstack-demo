import authSlice from '@/store/features/auth/auth.slice';

export const authReducer = authSlice.reducer;

export const { loginAction, getProfileAction } = authSlice.actions;
