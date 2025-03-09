import { isLive } from '@/utils';

const constants = {
  APP_NAME: 'Next.js Template',
  COOKIES: {
    TOKEN_NAME: 'token',
    THEME_NAME: 'theme',
  },
  THEME: {
    LIGHT: 'light',
    DARK: 'dark',
  },
  PROGRESS_BAR_DELAY: isLive ? 200 : 500,
} as const;

export default constants;
