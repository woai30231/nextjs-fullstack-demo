import axios from '@/api/axios';
import endpoints from '@/api/endpoints';

import type { MeRes } from '@/features/user/user.type';
import type {
  AxiosOutput as Axios,
  AxiosDocsOutput as AxiosDocs,
  TokenOutput,
} from '@/types/axios';

export const loginApi: Axios<unknown, TokenOutput> = async (data) =>
  axios({ ...endpoints.login, ...data });

export const getProfileApi: Axios<MeRes> = async (data) =>
  axios({ ...endpoints.getProfile, ...data });
