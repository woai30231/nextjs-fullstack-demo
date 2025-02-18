import type { GetProfileOutput } from '@/features/profile/profile.type';
import type { Mode } from '@/store/slices/theme/theme.type';

interface InitialStateProps {
  user: GetProfileOutput | undefined;
  mode: Mode;
}

export interface ProvidersProps {
  initialState: InitialStateProps;
}

export interface ZustandInitialState {
  initialState?: InitialStateProps | undefined;
}
