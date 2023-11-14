import { useQuery } from '@tanstack/react-query';

import { getAllUsersApi } from '@/features/user/user.api';

export const useUsers = () => useQuery({ queryKey: ['users'], queryFn: getAllUsersApi });
