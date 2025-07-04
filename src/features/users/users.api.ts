import api from '@/api';
import catchAsync from '@/api/catchAsync';

import type { GetAllUsersInput, GetAllUsersOutput } from '@/features/users/users.type';

export const getAllUsersApi = catchAsync<GetAllUsersInput, GetAllUsersOutput>(
  async ({ signal }) => {
    const res = await api.getAllUsers<GetAllUsersOutput>({ signal });
    console.log(res)
    console.log('res:usersList')
    return res.data.data;
  },
);
