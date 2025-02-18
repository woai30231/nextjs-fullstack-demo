import users, { transformUser } from '@/app/api/_mock/users';

import type { Route } from '@/types/api.type';

export const GET: Route = async () =>
  Response.json({
    status: 200,
    message: 'Users retrieved successfully.',
    data: users.map((cur) => transformUser(cur)),
  });
