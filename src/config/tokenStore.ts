import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';

import constants from '@/constants';
import { isServer } from '@/utils/utils';

const { tokenName } = constants.cookies;

const cookies = async () => {
  const { cookies: serverCookies } = await import('next/headers');
  return serverCookies();
};

const tokenStore = {
  get(key: string = tokenName): string | null {
    const token = hasCookie(key) && getCookie(key);
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    return token || null;
  },
  async getAsync(key: string = tokenName): Promise<string | null> {
    if (isServer) {
      const cookieStore = await cookies();

      const token = cookieStore.has(key) && cookieStore.get(key);
      return token ? token.value : null;
    }

    return this.get(key);
  },
  set(value: string, key: string = tokenName): true {
    setCookie(key, value, { expires: new Date('9999-12-31') });
    return true;
  },
  async setAsync(value: string, key: string = tokenName): Promise<true> {
    if (isServer) {
      const cookieStore = await cookies();

      cookieStore.set(key, value, { expires: new Date('9999-12-31') });
      return true;
    }

    return this.set(value, key);
  },
  delete(key: string = tokenName): boolean {
    const isExist = hasCookie(key);
    if (!isExist) return false;

    deleteCookie(key);
    return true;
  },
  async deleteAsync(key: string = tokenName): Promise<boolean> {
    if (isServer) {
      const cookieStore = await cookies();
      const isExist = cookieStore.has(key);
      if (!isExist) return false;

      cookieStore.delete(key);
      return true;
    }

    return this.delete();
  },
};

export default tokenStore;
