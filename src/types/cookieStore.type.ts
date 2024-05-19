import type constants from '@/constants';
import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import type { ValueOf } from 'type-fest';

export type DefaultSetOptions = Partial<ResponseCookie> & {
  expires?: Exclude<ResponseCookie['expires'], number>;
};

export type GetOptions = (options: DefaultSetOptions) => DefaultSetOptions;

type CookieKey = ValueOf<typeof constants.cookies>;

export type GetCookie<P extends boolean = false, T = string | null> = (
  key: CookieKey
) => P extends true ? Promise<T> : T;

export type SetCookie<P extends boolean = false, T = true> = (
  key: CookieKey,
  value: string,
  options?: DefaultSetOptions
) => P extends true ? Promise<T> : T;

export type DeleteCookie<P extends boolean = false, T = boolean> = (
  key: CookieKey
) => P extends true ? Promise<T> : T;

export interface CookieStoreType {
  get: GetCookie;
  getAsync: GetCookie<true>;
  set: SetCookie;
  setAsync: SetCookie<true>;
  delete: DeleteCookie;
  deleteAsync: DeleteCookie<true>;
}
