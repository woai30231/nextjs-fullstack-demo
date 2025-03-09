import type { CreateStore } from '@/types/store.type';
import type { RootLayoutAppProps } from '@/types/zustandState.type';

type ZustandStateHook = (props: RootLayoutAppProps) => Parameters<CreateStore>[0];

export const useZustandState: ZustandStateHook = (props) => props;
