export interface MeRes {
  firstName: string;
  lastName: string;
  fullName: string;
}

export interface AuthInfo {
  isAuthenticated: boolean;
  token?: string | null;
  user?: MeRes;
}
