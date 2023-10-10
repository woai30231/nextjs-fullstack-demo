import type { GetProfileOutput } from '@/features/auth/auth.type';
import type { UseQueryResult } from '@tanstack/react-query';

export interface AuthInfo {
  isAuthenticated: boolean;
  token?: string | null;
  user?: GetProfileOutput | null;
}

export type UseUser = () => UseQueryResult<GetProfileOutput | undefined>;

export type TransformUserData = (user?: GetProfileOutput | undefined) => AuthInfo;
