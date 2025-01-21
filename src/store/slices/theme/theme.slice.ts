import constants from '@/constants';
import cookieStore from '@/lib/cookieStore';

import type {
  CreateThemeSlice,
  Mode,
  ThemeSliceDetectMode,
  ThemeSliceGetMode,
  ThemeSliceInitialState,
  ThemeSliceSetModeClient,
} from '@/store/slices/theme/theme.type';

const { light, dark } = constants.theme;

const initialState: ThemeSliceInitialState = {
  mode: light,
};

export const detectMode: ThemeSliceDetectMode = () => {
  const darkThemeMq = globalThis.matchMedia(`(prefers-color-scheme: ${light})`);
  return darkThemeMq.matches ? light : dark;
};

export const getMode: ThemeSliceGetMode = modeString => {
  const mode = (() => {
    if (!modeString) return initialState.mode;
    return modeString === light ? light : dark;
  })();

  return { mode };
};

export const setModeClient: ThemeSliceSetModeClient = mode => {
  document.documentElement.classList.remove(`${mode === dark ? light : dark}-mode`);
  document.documentElement.classList.add(`${mode}-mode`);
  cookieStore.set(constants.cookies.themeName, mode);
};

const createThemeSlice: CreateThemeSlice = set => ({
  ...initialState,
  setMode: (mode: Mode) => {
    set({ mode }, false, 'theme/setMode');
    setModeClient(mode);
  },
});

export default createThemeSlice;
