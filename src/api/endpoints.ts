import type { Endpoints } from '@/types/Axios';

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
