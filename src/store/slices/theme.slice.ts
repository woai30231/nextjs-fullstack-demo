import { isServer } from '@/utils/utils';

import type { StateCreator } from 'zustand';

interface ThemeSlice {
  isDarkMode: boolean;
  setMode: () => void;
}

const detectMode = (): boolean => {
  if (isServer) return true;

  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  return darkThemeMq.matches;
};

const setMode = (isDarkMode: boolean): void => {
  const method = isDarkMode ? 'remove' : 'add';
  document.documentElement.classList[method]('light-mode');
};

const createThemeSlice: StateCreator<ThemeSlice> = (set, get) => ({
  isDarkMode: detectMode(),
  setMode: () => {
    const { isDarkMode } = get();
    set({ isDarkMode: !isDarkMode });
    setMode(!isDarkMode);
  },
});

export default createThemeSlice;
