import queryClient from '@/config/queryClient';
import cookieStore from '@/lib/cookieStore';

import type {
  AuthSliceGetUser,
  AuthSliceInitialState,
  CreateAuthSlice,
} from '@/store/slices/auth/auth.type';

const initialState: AuthSliceInitialState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

export const getUser: AuthSliceGetUser = payload => {
  queryClient.setQueryData(['user'], payload);

  return {
    isAuthenticated: true,
    token: cookieStore.get(),
    user: payload,
  };
};

const createAuthSlice: CreateAuthSlice = set => ({
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
