import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';

import config from '@/config';
import { isServer } from '@/utils/utils';

const { tokenName } = config;

const cookies = async () => {
  const { cookies: serverCookies } = await import('next/headers');
  return serverCookies();
};

const tokenStore = {
  get(): string | null {
    const token = hasCookie(tokenName) && getCookie(tokenName);
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    return token || null;
  },
  async getAsync(): Promise<string | null> {
    if (isServer) {
      const cookieStore = await cookies();

      const token = cookieStore.has(tokenName) && cookieStore.get(tokenName);
      return token ? token.value : null;
    }

    return this.get();
  },
  set(value: string): true {
    setCookie(tokenName, value);
    return true;
  },
  async setAsync(value: string): Promise<true> {
    if (isServer) {
      const cookieStore = await cookies();

      cookieStore.set(tokenName, value);
      return true;
    }

    return this.set(value);
  },
  delete(): boolean {
    const isExist = hasCookie(tokenName);
    if (!isExist) return false;

    deleteCookie(tokenName);
    return true;
  },
  async deleteAsync(): Promise<boolean> {
    if (isServer) {
      const cookieStore = await cookies();
      const isExist = cookieStore.has(tokenName);
      if (!isExist) return false;

      cookieStore.delete(tokenName);
      return true;
    }

    return this.delete();
  },
};

export default tokenStore;
