import type { Route } from '@/types/api.type';
import users from '@/app/api/_mock/users';

export const GET: Route = async () =>
  Response.json({ status: 200, message: 'Users retrieved successfully.', data: users });
