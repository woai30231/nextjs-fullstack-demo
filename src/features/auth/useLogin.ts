import { useMutation } from '@tanstack/react-query';

import { loginApi } from '@/features/auth/auth.api';
import { useStore } from '@/store';

export const useLogin = () => {
  const login = useStore(state => state.login);

  return useMutation({
    mutationFn: loginApi,
    onSuccess: async data => {
      if (!data) return;

      login(data.access_token);
    },
  });
};
