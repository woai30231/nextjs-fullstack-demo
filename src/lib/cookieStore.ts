import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';

import constants from '@/constants';
import { isServer } from '@/utils/utils';

import type { CookieStoreType, DefaultSetOptions, GetOptions } from '@/types/cookieStore.type';

const { tokenName } = constants.cookies;

const cookies = async () => {
  const { cookies: serverCookies } = await import('next/headers');
  return serverCookies();
};

const getOptions: GetOptions = (options = {}) => {
  const defaultSetOptions: DefaultSetOptions = {
    expires: new Date('9999-12-31'),
  };

  return { ...defaultSetOptions, ...options };
};

const cookieStore: CookieStoreType = {
  get(key = tokenName) {
    const token = hasCookie(key) ? getCookie(key) : null;
    return token ?? null;
  },
  async getAsync(key = tokenName) {
    if (isServer) {
      const serverCookies = await cookies();

      const token = serverCookies.has(key) ? serverCookies.get(key) : null;
      return token ? token.value : null;
    }

    return this.get(key);
  },
  set(value, key = tokenName, options = {}) {
    setCookie(key, value, getOptions(options));
    return true;
  },
  async setAsync(value, key = tokenName, options = {}) {
    if (isServer) {
      const serverCookies = await cookies();

      serverCookies.set(key, value, getOptions(options));
      return true;
    }

    return this.set(value, key);
  },
  delete(key = tokenName) {
    const isExist = hasCookie(key);
    if (!isExist) return false;

    deleteCookie(key);
    return true;
  },
  async deleteAsync(key = tokenName) {
    if (isServer) {
      const serverCookies = await cookies();
      const isExist = serverCookies.has(key);
      if (!isExist) return false;

      serverCookies.delete(key);
      return true;
    }

    return this.delete(key);
  },
};

export default cookieStore;
