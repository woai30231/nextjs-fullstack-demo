import type { GetProfileOutput } from '@/features/profile/profile.type';

export interface RootLayoutAppProps {
  user: GetProfileOutput | undefined;
}

export type ZustandState = RootLayoutAppProps;

export type ZustandProviderProps = ZustandState;
