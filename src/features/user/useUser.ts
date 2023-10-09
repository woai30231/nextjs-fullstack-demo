import { useQuery } from '@tanstack/react-query';

import { getProfile } from '@/features/auth/auth.api';
import tokenStore from '@/storage/client';

import type { AuthInfo, TransformUserData, UseUser } from '@/features/user/user.type';

export const transformUserData: TransformUserData = (user): AuthInfo => ({
  isAuthenticated: !!user,
  token: tokenStore.get(),
  user,
});

export const useUser: UseUser = () => {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: async ({ signal }) => transformUserData(await getProfile({ signal })),
    initialData: transformUserData,
    retry: false,
    staleTime: Infinity,
    meta: {
      noErrorMessage: true,
      noMessage: true,
    },
  });

  return data;
};
