import axiosInstance from 'axios';
import { toast } from 'react-toastify';

import type { AxiosErr } from '@/api/utils';
import { showToast } from '@/api/utils';
import config from '@/config';
import constants from '@/constants';
import cookieStore from '@/lib/cookieStore';
import store from '@/store/store';
import { isServer } from '@/utils/utils';

import type { InternalAxiosRequestConfigWithExtraProps } from '@/types/axios.type';
import type { AxiosError } from 'axios';

const axios = axiosInstance.create({ baseURL: config.NEXT_PUBLIC_API_PATH });

axios.interceptors.request.use(
  async (conf: InternalAxiosRequestConfigWithExtraProps) => {
    const myConfig = { ...conf };

    const lang = myConfig.headers['Accept-Language'];
    const token = myConfig.noAuth ? null : await cookieStore.getAsync(constants.cookies.tokenName);

    if (token) myConfig.headers.Authorization = `Bearer ${token}`;
    if (!isServer && !lang) myConfig.headers['Accept-Language'] = 'en';

    myConfig.url = Object.entries(conf.urlParams ?? {}).reduce((acc, [k, v]) => {
      let temp = `${acc}`;
      temp = temp.replace(`:${k}`, v.toString());

      return temp;
    }, myConfig.url ?? '');

    if (myConfig.data instanceof FormData) {
      myConfig.headers['Content-Type'] = 'multipart/form-data';
    }

    return myConfig;
  },
  async (error: AxiosError) => {
    if (!isServer) console.debug('Request Error', error);
    throw error;
  }
);

axios.interceptors.response.use(
  res => {
    if (!isServer) showToast(res);
    return res;
  },
  async (error: AxiosErr) => {
    if (!isServer) {
      if (error.code === 'ERR_NETWORK') {
        toast.error(error.message);
        throw error;
      }

      if (error.response && [401, 403].includes(error.response.status)) {
        store().getState().logout();
      }

      showToast(error);
      console.debug('Response Error', error);
    }

    throw error;
  }
);

export default axios;
