import type { MeRes } from '@/types/schemas/Profile';

export interface AuthSliceState {
  isAuthenticated: boolean;
  token: string | null;
  user: MeRes | null;
}
