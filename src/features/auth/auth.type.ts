import type { AxiosSignal } from '@/types/axios';
import type { UseMutationResult } from '@tanstack/react-query';

/* Login API */

interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  access_token: string;
}

export type Login = (params: LoginInput) => Promise<LoginOutput | undefined>;

export type UseLogin = () => UseMutationResult<LoginOutput | undefined, unknown, LoginInput>;

/* Get Profile API */

interface GetProfileInput extends AxiosSignal {
  token?: string | null;
}

export interface GetProfileOutput {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

export type GetProfile = (params: GetProfileInput) => Promise<GetProfileOutput | undefined>;
