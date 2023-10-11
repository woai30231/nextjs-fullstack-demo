import type { GetProfileOutput } from '@/features/auth/auth.type';

export interface AuthInfo {
  isAuthenticated: boolean;
  token?: string | null;
  user?: GetProfileOutput | null;
}

interface UseFetchUserOutput {
  isLoading: boolean;
  fetchUser: () => Promise<boolean>;
}

export type UseFetchUser = () => UseFetchUserOutput;
