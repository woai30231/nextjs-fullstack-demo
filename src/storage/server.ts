import { cookies } from 'next/headers';

import config from '@/config';

const { tokenName } = config;

const serverTokenStore = {
  get: (): string | null => {
    const cookieStore = cookies();

    const token = cookieStore.has(tokenName) && cookieStore.get(tokenName);
    return token ? token.value : null;
  },
  set: (value: string): boolean => {
    const cookieStore = cookies();

    const isExist = cookieStore.has(tokenName);
    if (!isExist) return false;

    cookieStore.set(tokenName, value);
    return true;
  },
  delete: (): boolean => {
    const cookieStore = cookies();
    const isExist = cookieStore.has(tokenName);
    if (!isExist) return false;

    cookieStore.delete(tokenName);
    return true;
  },
};

export default serverTokenStore;
