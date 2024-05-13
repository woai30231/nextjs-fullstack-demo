import tokenStore from '@/config/tokenStore';
import { isServer } from '@/utils/utils';

import type { SliceCreator } from '@/types/store';

type Mode = 'dark' | 'light';

interface ThemeSlice {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const detectMode = (): Mode => {
  if (isServer) return 'dark';

  const theme = tokenStore.get('theme');
  if (theme) return theme === 'dark' ? 'dark' : 'light';

  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  return darkThemeMq.matches ? 'dark' : 'light';
};

const setMode = (mode: Mode): void => {
  const method = mode === 'dark' ? 'remove' : 'add';
  document.documentElement.classList[method]('light-mode');
  tokenStore.set(mode, 'theme');
};

const createThemeSlice: SliceCreator<ThemeSlice> = set => ({
  mode: detectMode(),
  setMode: (mode: Mode) => {
    set({ mode }, false, 'theme/setMode');
    setMode(mode);
  },
});

export default createThemeSlice;
