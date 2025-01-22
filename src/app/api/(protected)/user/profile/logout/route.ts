import type { Route } from '@/types/api.type';

export const POST: Route = async request => {
  return Response.json({
    status: 200,
    message: 'Logged out successfully.',
  });
};
