import type { GetProfileOutput } from '@/features/auth/auth.type';

export interface AuthInfo {
  isAuthenticated: boolean;
  token?: string | null;
  user?: GetProfileOutput;
}

export type UseUser = () => AuthInfo;

export type TransformUserData = (user?: GetProfileOutput | undefined) => AuthInfo;
