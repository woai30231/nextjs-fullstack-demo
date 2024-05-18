import type { Endpoints } from '@/types/api/axios';

const endpoints: Endpoints = {
  login: {
    method: 'POST',
    url: '/auth/login',
    manageToast: res => !!res.message,
  },
  getProfile: {
    method: 'GET',
    // Usually in every backend it is /profile/me or /profile, so configured in this way
    url: '/auth/profile',
  },
  getAllUsers: {
    method: 'GET',
    url: '/users',
  },
} as const;

export default endpoints;
