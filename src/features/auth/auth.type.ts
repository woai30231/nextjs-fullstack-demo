import type { UseMutationResult } from '@tanstack/react-query';

/* Login API */

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  access_token: string;
}

export type UseLogin = () => UseMutationResult<LoginOutput | undefined, unknown, LoginInput>;

/* Get Profile API */

export type GetProfileInput = unknown;

export interface GetProfileOutput {
  id: number;
  email: string;
  name: string;
  avatar: string;
}
