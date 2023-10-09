import { useQuery } from '@tanstack/react-query';

import { getProfile } from '@/features/auth/auth.api';
import tokenStore from '@/storage/client';

import type { GetProfileOutput } from '@/features/auth/auth.type';
import type { AuthInfo, UseUser } from '@/features/user/user.type';

const transformUserData = (user: GetProfileOutput | undefined = undefined): AuthInfo => ({
  isAuthenticated: !!user,
  token: tokenStore.get(),
  user,
});

export const useUser: UseUser = initialData => {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: async ({ signal }) => transformUserData(await getProfile({ signal })),
    initialData: transformUserData(initialData),
    retry: false,
    staleTime: Infinity,
    meta: {
      noErrorMessage: !initialData,
    },
  });

  return data;
};
