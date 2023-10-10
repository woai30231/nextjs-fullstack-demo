import api from '@/api';
import { throwAxiosError } from '@/api/utils';
import tokenStore from '@/storage/client';

import type { GetProfile, GetProfileOutput, Login, LoginOutput } from '@/features/auth/auth.type';

export const loginApi: Login = async data => {
  try {
    const res = await api.login<LoginOutput, true>({ data });

    return res.data;
  } catch (err) {
    throwAxiosError(err);
  }
};

export const getProfileApi: GetProfile = async ({ token, signal }) => {
  try {
    const res = await api.getProfile<GetProfileOutput, true>({
      data: { platform: 1 },
      serverToken: token,
      signal,
    });

    return res.data;
  } catch (err) {
    tokenStore.delete();
    throwAxiosError(err);
  }
};
