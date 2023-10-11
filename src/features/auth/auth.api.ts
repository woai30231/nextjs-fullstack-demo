import api from '@/api';
import { throwAxiosError } from '@/api/utils';
import tokenStore from '@/config/tokenStore';

import type { GetProfile, GetProfileOutput, Login, LoginOutput } from '@/features/auth/auth.type';

export const loginApi: Login = async (data, noErrorThrow) => {
  try {
    const res = await api.login<LoginOutput, true>({ data });

    return res.data;
  } catch (err) {
    if (!noErrorThrow) throwAxiosError(err);
    return undefined;
  }
};

export const getProfileApi: GetProfile = async ({ signal }, noErrorThrow) => {
  try {
    const res = await api.getProfile<GetProfileOutput, true>({ signal });

    return res.data;
  } catch (err) {
    tokenStore.delete();
    if (!noErrorThrow) throwAxiosError(err);
    return undefined;
  }
};
