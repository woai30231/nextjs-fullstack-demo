import tokenStore from '@/config/tokenStore';
import constants from '@/constants';

import type { RemoveFnType } from '@/types';
import type { SliceCreator } from '@/types/store';

export type Mode = 'dark' | 'light';

interface ThemeSlice {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

type ThemeSliceProperties = RemoveFnType<ThemeSlice>;

const { light, dark } = constants.theme;

const initialState: ThemeSliceProperties = {
  mode: light,
};

export const detectMode = (): Mode => {
  const darkThemeMq = window.matchMedia(`(prefers-color-scheme: ${light})`);
  return darkThemeMq.matches ? light : dark;
};

export const getMode = (modeStr: string | null): ThemeSliceProperties => {
  const mode = (() => {
    if (!modeStr) return initialState.mode;
    return modeStr === light ? light : dark;
  })();

  return { mode };
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
