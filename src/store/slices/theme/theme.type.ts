import type { RemoveFnType } from '@/types';
import type { SliceCreator } from '@/types/store.type';

export type Mode = 'dark' | 'light';

interface ThemeSlice {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export type ThemeSliceInitialState = RemoveFnType<ThemeSlice>;

export type CreateThemeSlice = SliceCreator<ThemeSlice>;

// OUTER FUNCTIONS

export type ThemeSliceDetectMode = () => Mode;

export type ThemeSliceGetMode = (modeStr: string | null) => ThemeSliceInitialState;

export type ThemeSliceSetModeClient = (mode: Mode) => void;
