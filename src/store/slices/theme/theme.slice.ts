import constants from '@/constants';
import cookieStore from '@/lib/cookieStore';

import type {
  CreateThemeSlice,
  ThemeSliceDetectMode,
  ThemeSliceGetMode,
  ThemeSliceGetPreferredMode,
  ThemeSliceInitialState,
  ThemeSliceSetModeClient,
} from '@/store/slices/theme/theme.type';

const { LIGHT, DARK, SYSTEM } = constants.THEME;

const initialState: ThemeSliceInitialState = {
  mode: LIGHT,
  preferredMode: LIGHT,
};

export const detectMode: ThemeSliceDetectMode = () => {
  const darkThemeMq = globalThis.matchMedia(`(prefers-color-scheme: ${DARK})`);
  return darkThemeMq.matches ? DARK : LIGHT;
};

export const getMode: ThemeSliceGetMode = (mode) => {
  if (mode === DARK) return DARK;
  if (mode === SYSTEM) return SYSTEM;
  return LIGHT;
};

export const getPreferredMode: ThemeSliceGetPreferredMode = (mode) => {
  return mode === DARK ? DARK : LIGHT;
};

export const setModeClient: ThemeSliceSetModeClient = (mode) => {
  const isSystem = mode === SYSTEM;
  const actualMode = isSystem ? detectMode() : mode;

  document.documentElement.dataset.theme = actualMode;
  cookieStore.set(constants.COOKIES.THEME_NAME, mode);
  if (isSystem) cookieStore.set(constants.COOKIES.SYSTEM_THEME, actualMode);

  return actualMode;
};

const createThemeSlice: CreateThemeSlice = (set, get) => ({
  ...initialState,
  setMode: (mode) => {
    const themeMode = (() => {
      if (get().mode === LIGHT) return DARK;
      if (get().mode === DARK) return SYSTEM;
      return LIGHT;
    })();

    const actualMode = mode ?? themeMode;
    const preferredMode = setModeClient(actualMode);

    set({ mode: actualMode, preferredMode }, false, 'theme/setMode');
  },
});

export default createThemeSlice;
