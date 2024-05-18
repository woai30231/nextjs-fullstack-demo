import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';

import constants from '@/constants';
import { isServer } from '@/utils/utils';

import type { CookieStoreType } from '@/types/cookieStore.type';

const { tokenName } = constants.cookies;

const cookies = async () => {
  const { cookies: serverCookies } = await import('next/headers');
  return serverCookies();
};

const cookieStore: CookieStoreType = {
  get(key = tokenName) {
    const token = hasCookie(key) && getCookie(key);
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    return token || null;
  },
  async getAsync(key = tokenName) {
    if (isServer) {
      const serverCookies = await cookies();

      const token = serverCookies.has(key) && serverCookies.get(key);
      return token ? token.value : null;
    }

    return this.get(key);
  },
  set(value, key = tokenName) {
    setCookie(key, value, { expires: new Date('9999-12-31') });
    return true;
  },
  async setAsync(value, key = tokenName) {
    if (isServer) {
      const serverCookies = await cookies();

      serverCookies.set(key, value, { expires: new Date('9999-12-31') });
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

    return this.delete();
  },
};

export default cookieStore;
