import type { Endpoints } from '@/types/axios';

const endpoints: Endpoints = {
  getProfile: {
    method: 'POST',
    url: '/profile/me',
  },
  login: {
    method: 'POST',
    url: '/auth/login',
  },
};

export default endpoints;
