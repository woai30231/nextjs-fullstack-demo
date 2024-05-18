import queryClient from '@/config/queryClient';
import cookieStore from '@/lib/cookieStore';

import type { GetProfileOutput } from '@/features/profile/profile.type';
import type { RemoveFnType } from '@/types';
import type { SliceCreator } from '@/types/store';

interface AuthSlice {
  isAuthenticated: boolean;
  token?: string | null;
  user?: GetProfileOutput | null;
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
    token: cookieStore.get() ?? '',
    user: payload,
  };
};

const createAuthSlice: SliceCreator<AuthSlice> = set => ({
  ...initialState,
  login: token => {
    set({ token }, false, 'auth/login');
    cookieStore.set(token);
  },
  setUser: payload => {
    set(getUser(payload), false, 'auth/setUser');
  },
  logout: () => {
    set(initialState, false, 'auth/logout');
    cookieStore.delete();
    queryClient.removeQueries();
  },
});

export default createAuthSlice;
