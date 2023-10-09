import { useMutation, useQueryClient } from '@tanstack/react-query';

import { login } from '@/features/auth/auth.api';
import tokenStore from '@/storage/client';

import type { UseLogin } from '@/features/auth/auth.type';

export const useLogin: UseLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: async data => {
      if (!data) return;

      tokenStore.set(data.access_token);
      await queryClient.invalidateQueries({ queryKey: ['user'], exact: true });
    },
  });
};
