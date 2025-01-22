import queryClient from '@/config/queryClient';
import constants from '@/constants';
import cookieStore from '@/lib/cookieStore';

import type {
  AuthSliceGetUser,
  AuthSliceInitialState,
  CreateAuthSlice,
} from '@/store/slices/auth/auth.type';

const initialState: AuthSliceInitialState = {
  isAuthenticated: false,
  user: null,
};

export const getUser: AuthSliceGetUser = payload => {
  queryClient.setQueryData(['user'], payload);

  return {
    isAuthenticated: true,
    user: payload,
  };
};

const createAuthSlice: CreateAuthSlice = set => ({
  ...initialState,
  login: token => {
    cookieStore.set(constants.cookies.tokenName, token);
  },
  setUser: payload => {
    set(getUser(payload), false, 'auth/setUser');
  },
  logout: () => {
    set(initialState, false, 'auth/logout');
    cookieStore.delete(constants.cookies.tokenName);
    queryClient.removeQueries();
  },
});

export default createAuthSlice;
