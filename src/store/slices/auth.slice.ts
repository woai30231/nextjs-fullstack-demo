import queryClient from '@/config/queryClient';
import tokenStore from '@/config/tokenStore';

import type { GetProfileOutput } from '@/features/auth/auth.type';
import type { AuthInfo } from '@/features/user/user.type';
import type { RemoveFnType } from '@/types';
import type { SliceCreator } from '@/types/store';

interface AuthSlice extends AuthInfo {
  login: (token: string) => void;
  setUser: (payload: GetProfileOutput) => void;
  logout: () => void;
}

type AuthSliceProperties = RemoveFnType<AuthSlice>;

const initialState: AuthSliceProperties = {
  isAuthenticated: false,
  token: null,
  user: null,
};

export const getUser = (payload: GetProfileOutput): AuthSliceProperties => {
  queryClient.setQueryData(['user'], payload);

  return {
    isAuthenticated: true,
    token: tokenStore.get() ?? '',
    user: payload,
  };
};

const createAuthSlice: SliceCreator<AuthSlice> = set => ({
  ...initialState,
  login: token => {
    set({ token }, false, 'auth/login');
    tokenStore.set(token);
  },
  setUser: payload => {
    set(getUser(payload), false, 'auth/setUser');
  },
  logout: () => {
    set(initialState, false, 'auth/logout');
    tokenStore.delete();
    queryClient.removeQueries();
  },
});

export default createAuthSlice;
