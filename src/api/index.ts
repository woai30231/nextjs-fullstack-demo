import axios from '@/api/axios';
import endpoints from '@/api/endpoints';

import type {
  AxiosOutput as Axios,
  AxiosDocsOutput as AxiosDocs,
  TokenOutput,
} from '@/types/Axios';
import type { MeRes } from '@/types/schemas/Profile';

export const login: Axios<unknown, TokenOutput> = async (data) =>
  axios({ ...endpoints.login, ...data });

export const getProfile: Axios<MeRes> = async (data) => axios({ ...endpoints.getProfile, ...data });
