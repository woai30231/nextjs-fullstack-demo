import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';

import config from '@/config';

const { tokenName } = config;

const tokenStore = {
  get: (): string | null => {
    const token = hasCookie(tokenName) && getCookie(tokenName);
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    return token || null;
  },
  set: (value: string): true => {
    setCookie(tokenName, value);
    return true;
  },
  delete: (): boolean => {
    const isExist = hasCookie(tokenName);
    if (!isExist) return false;

    deleteCookie(tokenName);
    return true;
  },
};

export default tokenStore;
