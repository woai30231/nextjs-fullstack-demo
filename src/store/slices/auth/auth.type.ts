import type { GetProfileOutput } from '@/features/profile/profile.type';
import type { RemoveFnType } from '@/types';
import type { SliceCreator } from '@/types/store.type';

interface AuthSlice {
  isAuthenticated: boolean;
  user?: GetProfileOutput | null;
  login: (token: string) => void;
  setUser: (payload: GetProfileOutput) => void;
  logout: () => void;
}

export type AuthSliceInitialState = RemoveFnType<AuthSlice>;

export type CreateAuthSlice = SliceCreator<AuthSlice>;

// OUTER FUNCTIONS

export type AuthSliceGetUser = (payload: GetProfileOutput) => AuthSliceInitialState;
