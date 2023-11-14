import axios from '@/api/axios';
import endpoints from '@/api/endpoints';

import type { AxiosOutput as Axios, AxiosDocsOutput as AxiosDocs } from '@/types/axios';

export const login: Axios = async data => axios({ ...endpoints.login, ...data });

export const getProfile: Axios = async data => axios({ ...endpoints.getProfile, ...data });

export const getAllUsers: Axios = async data => axios({ ...endpoints.getAllUsers, ...data });
