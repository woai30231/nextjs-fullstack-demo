import { useQuery } from '@tanstack/react-query';

import { getProfileApi } from '@/api';
import { throwAxiosError } from '@/api/utils';
import tokenStore from '@/storage/client';

import type { AuthInfo, MeRes } from '@/features/user/user.type';

const transformUserData = (user: MeRes | undefined = undefined): AuthInfo => ({
  isAuthenticated: !!user,
  token: tokenStore.get(),
  user,
});

export const getProfile = async (token: string | null = null): Promise<MeRes | undefined> => {
  try {
    const res = await getProfileApi({
      serverToken: token,
      data: { platform: 1 },
    });

    return res.data.data;
  } catch (err) {
    tokenStore.delete();
    throwAxiosError(err);
  }
};

export const useUser = (initialData: MeRes | undefined = undefined): AuthInfo => {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: async () => transformUserData(await getProfile()),
    initialData: transformUserData(initialData),
    retry: false,
    staleTime: Infinity,
    meta: {
      noErrorMessage: !initialData,
    },
  });

  return data;
};
