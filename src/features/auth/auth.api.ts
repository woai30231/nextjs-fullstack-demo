import api from '@/api';
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

export const getProfileApi = catchAsync<GetProfileInput, GetProfileOutput>(async ({ signal }) => {
  const res = await api.getProfile<GetProfileOutput, true>({ signal });
  return res.data;
});
