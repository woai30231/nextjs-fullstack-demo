import api from '@/api';
import catchAsync from '@/utils/catchAsync';

import type { GetProfileInput, GetProfileOutput } from '@/features/profile/profile.type';

export const getProfileApi = catchAsync<GetProfileInput, GetProfileOutput>(async ({ signal }) => {
  const res = await api.getProfile<GetProfileOutput, true>({ signal });
  return res.data;
});
