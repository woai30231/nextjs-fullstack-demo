export type GetCookie<P extends boolean = false, T = string | null> = (
  key?: string
) => P extends true ? Promise<T> : T;

export type SetCookie<P extends boolean = false, T = true> = (
  value: string,
  key?: string
) => P extends true ? Promise<T> : T;

export type DeleteCookie<P extends boolean = false, T = boolean> = (
  key?: string
) => P extends true ? Promise<T> : T;

export interface CookieStoreType {
  get: GetCookie;
  getAsync: GetCookie<true>;
  set: SetCookie;
  setAsync: SetCookie<true>;
  delete: DeleteCookie;
  deleteAsync: DeleteCookie<true>;
}
