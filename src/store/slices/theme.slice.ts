import tokenStore from '@/config/tokenStore';
import constants from '@/constants';
import { isServer } from '@/utils/utils';

import type { SliceCreator } from '@/types/store';

export type Mode = 'dark' | 'light';

interface ThemeSlice {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const { light, dark } = constants.theme;

const initialState = {
  mode: light,
};

const detectMode = (): Mode => {
  if (isServer) return light;

  const darkThemeMq = window.matchMedia(`(prefers-color-scheme: ${light})`);
  return darkThemeMq.matches ? light : dark;
};

export const getMode = (modeStr: string | null): Mode => {
  if (!modeStr) return initialState.mode;

  return modeStr === light ? light : dark;
};

export const setModeClient = (mode: Mode): void => {
  document.documentElement.classList.remove(`${mode === dark ? light : dark}-mode`);
  document.documentElement.classList.add(`${mode}-mode`);
  tokenStore.set(mode, constants.cookies.themeName);
};

const createThemeSlice: SliceCreator<ThemeSlice> = set => ({
  ...initialState,
  setMode: (mode: Mode) => {
    set({ mode }, false, 'theme/setMode');
    setModeClient(mode);
  },
});

export default createThemeSlice;
