import { useQuery } from '@tanstack/react-query';

import { getAllUsersApi } from '@/features/user/user.api';

import type { UseGetAllUsers } from '@/features/user/user.type';

export const useUsers: UseGetAllUsers = () =>
  useQuery({ queryKey: ['users'], queryFn: getAllUsersApi });
