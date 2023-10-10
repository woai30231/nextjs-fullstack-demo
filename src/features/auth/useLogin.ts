import { useMutation, useQueryClient } from '@tanstack/react-query';

import { loginApi } from '@/features/auth/auth.api';
import { useStore } from '@/store';

import type { UseLogin } from '@/features/auth/auth.type';

export const useLogin: UseLogin = () => {
  const queryClient = useQueryClient();
  const loginAction = useStore(state => state.login);

  return useMutation({
    mutationFn: loginApi,
    onSuccess: async data => {
      if (!data) return;

      loginAction(data.access_token);
      await queryClient.invalidateQueries({ queryKey: ['user'], exact: true });
    },
  });
};
