export interface AuthSliceState {
  isAuthenticated: boolean;
  token: string | null;
  user: unknown;
}
