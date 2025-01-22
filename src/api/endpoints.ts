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
  logout: {
    method: 'GET',
    url: '/user/profile/logout',
  },
  getAllUsers: {
    method: 'GET',
    url: '/users',
  },
} as const;

export default endpoints;
