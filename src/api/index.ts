import axios from '@/api/axios';
import endpoints from '@/api/endpoints';

import type { AxiosFn, SuccessResponse } from '@/types/Axios';

const call = async (cb) => {
  const res = await cb();
};

export const login: AxiosFn<SuccessResponse> = async (data) =>
  axios({ ...endpoints.login, ...data });

export const getProfile: AxiosFn<SuccessResponse> = async (data) =>
  axios({ ...endpoints.getProfile, ...data });
