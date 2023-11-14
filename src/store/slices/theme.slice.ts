import { isServer } from '@/utils/utils';

import type { SliceCreator } from '@/types/store';

interface ThemeSlice {
  isDarkMode: boolean;
  setMode: () => void;
}

const detectDarkMode = (): boolean => {
  if (isServer) return true;

  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  return darkThemeMq.matches;
};

const setMode = (isDarkMode: boolean): void => {
  const method = isDarkMode ? 'remove' : 'add';
  document.documentElement.classList[method]('light-mode');
};

const createThemeSlice: SliceCreator<ThemeSlice> = (set, get) => ({
  isDarkMode: detectDarkMode(),
  setMode: () => {
    const { isDarkMode } = get();
    set({ isDarkMode: !isDarkMode }, false, 'theme/setMode');
    setMode(!isDarkMode);
  },
});

export default createThemeSlice;
