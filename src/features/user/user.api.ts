import api from '@/api';
import catchAsync from '@/utils/catchAsync';

import type { GetAllUsersInput, GetAllUsersOutput } from '@/features/user/user.type';

export const getAllUsersApi = catchAsync<GetAllUsersInput, GetAllUsersOutput>(
  async ({ signal }) => {
    const res = await api.getAllUsers<GetAllUsersOutput, true>({ signal });
    return res.data;
  }
);
