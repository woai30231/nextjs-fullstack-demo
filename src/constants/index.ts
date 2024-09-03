import { isLive } from '@/utils/utils';

const constants = {
  cookies: {
    tokenName: 'token',
    themeName: 'theme',
  },
  theme: {
    light: 'light',
    dark: 'dark',
  },
  progressBarDelay: isLive ? 200 : 500,
} as const;

export default constants;
