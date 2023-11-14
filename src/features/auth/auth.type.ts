/* Login API */

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  access_token: string;
}

/* Get Profile API */

export type GetProfileInput = unknown;

export interface GetProfileOutput {
  id: number;
  email: string;
  name: string;
  avatar: string;
}
