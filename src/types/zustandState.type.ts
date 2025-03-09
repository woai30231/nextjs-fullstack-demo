import type { GetProfileOutput } from '@/features/profile/profile.type';
import type { ThemeSliceInitialState } from '@/store/slices/theme/theme.type';

export interface RootLayoutAppProps extends Pick<ThemeSliceInitialState, 'mode' | 'preferredMode'> {
  user: GetProfileOutput | undefined;
}

export type ZustandState = RootLayoutAppProps;

export type ZustandProviderProps = ZustandState;
