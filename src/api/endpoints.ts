import type { Endpoints } from '@/types/axios';

const endpoints: Endpoints = {
  login: {
    method: 'POST',
    url: '/auth/login',
  },
  getProfile: {
    method: 'GET',
    url: '/auth/profile',
  },
} as const;

export default endpoints;
