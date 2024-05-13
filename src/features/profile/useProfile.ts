import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { getProfileApi } from '@/features/profile/profile.api';
import { useStore } from '@/store';

import type { UseFetchProfile } from '@/features/profile/profile.type';

export const useFetchProfile: UseFetchProfile = () => {
  const queryClient = useQueryClient();
  const setUser = useStore(state => state.setUser);
  const [isLoading, setLoading] = useState(false);

  const fetchProfile = async () => {
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

  return { isLoading, fetchProfile };
};
