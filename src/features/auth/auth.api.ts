import api from '@/api';
import tokenStore from '@/config/tokenStore';
import catchAsync from '@/utils/catchAsync';

import type {
  GetProfileInput,
  GetProfileOutput,
  LoginInput,
  LoginOutput,
} from '@/features/auth/auth.type';

export const loginApi = catchAsync<LoginInput, LoginOutput>(async data => {
  const res = await api.login<LoginOutput, true>({ data });
  return res.data;
});

const getProfileErrorCB = () => {
  tokenStore.delete();
  return undefined;
};

export const getProfileApi = catchAsync<GetProfileInput, GetProfileOutput>(async ({ signal }) => {
  const res = await api.getProfile<GetProfileOutput, true>({ signal });
  return res.data;
}, getProfileErrorCB);
