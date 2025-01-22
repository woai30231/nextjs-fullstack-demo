import type { Route } from '@/types/api.type';
import users, { transformUser } from '@/app/api/_mock/users';

export const GET: Route = async () =>
  Response.json({
    status: 200,
    message: 'Users retrieved successfully.',
    data: users.map(cur => transformUser(cur)),
  });
