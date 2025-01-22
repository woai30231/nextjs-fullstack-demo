import type { Endpoints } from '@/types/axios.type';

const endpoints: Endpoints = {
  login: {
    method: 'POST',
    url: '/auth/login',
    manageToast: res => !!res.message,
  },
  getProfile: {
    method: 'GET',
    url: '/user/profile/me',
  },
  getAllUsers: {
    method: 'GET',
    url: '/users',
  },
} as const;

export default endpoints;
