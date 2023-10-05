import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';

import config from '@/config';

const { tokenName } = config;

const clientTokenStore = {
  get: (): string | false => {
    const token = hasCookie(tokenName) && getCookie(tokenName);
    return token ?? false;
  },
  set: (value: string): boolean => {
    const isExist = hasCookie(tokenName);
    if (!isExist) return false;

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

export default clientTokenStore;
