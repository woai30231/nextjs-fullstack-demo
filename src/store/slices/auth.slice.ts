import tokenStore from '@/storage/client';

import type { GetProfileOutput } from '@/features/auth/auth.type';
import type { AuthInfo } from '@/features/user/user.type';
import type { StateCreator } from 'zustand';

interface AuthSlice extends AuthInfo {
  login: (token: string) => void;
  setUser: (payload: GetProfileOutput) => void;
  logout: () => void;
}

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const createAuthSlice: StateCreator<AuthSlice> = set => ({
  ...initialState,
  login: token => {
    set({ token });
    tokenStore.set(token);
  },
  setUser: payload =>
    set({
      isAuthenticated: true,
      token: tokenStore.get() ?? '',
      user: payload,
    }),
  logout: () => {
    set(initialState);
    tokenStore.delete();
  },
});

export default createAuthSlice;
