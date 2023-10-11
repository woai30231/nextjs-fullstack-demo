import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { getProfileApi } from '@/features/auth/auth.api';
import { useStore } from '@/store';

import type { UseFetchUser } from '@/features/user/user.type';

export const useFetchUser: UseFetchUser = () => {
  const queryClient = useQueryClient();
  const setUser = useStore(state => state.setUser);
  const [isLoading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);

    const data = await queryClient.fetchQuery({
      queryKey: ['user'],
      queryFn: async ({ signal }) => getProfileApi({ signal }),
    });

    setLoading(false);

    if (!data) return false;

    setUser(data);
    return true;
  };

  return { isLoading, fetchUser };
};
