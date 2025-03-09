import { getUser } from '@/store/slices/auth/auth.slice';

import type { CreateStore } from '@/types/store.type';
import type { RootLayoutAppProps } from '@/types/zustandState.type';

type ZustandStateHook = (props: RootLayoutAppProps) => Parameters<CreateStore>[0];

export const useZustandState: ZustandStateHook = (props) => {
  const { user } = props;
  let newState = {};

  if (user) {
    const state = getUser(user);
    newState = { ...newState, ...state };
  }

  return newState;
};
