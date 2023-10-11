import queryClient from '@/config/queryClient';
import tokenStore from '@/config/tokenStore';

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

export const setUser = (payload: GetProfileOutput): Partial<AuthInfo> => {
  queryClient.setQueryData(['user'], payload);

  return {
    isAuthenticated: true,
    token: tokenStore.get() ?? '',
    user: payload,
  };
};

const createAuthSlice: StateCreator<AuthSlice> = set => ({
  ...initialState,
  login: token => {
    set({ token });
    tokenStore.set(token);
  },
  setUser: payload => {
    set(setUser(payload));
  },
  logout: () => {
    set(initialState);
    tokenStore.delete();
    queryClient.removeQueries();
  },
});

export default createAuthSlice;
