import type { Route } from '@/types/api.type';
import users, { transformUser } from '@/app/api/_mock/users';

export const GET: Route = async request => {
  const userId = 1;

  const userData = users.find(cur => cur.id === userId);
  if (!userData) {
    return Response.json({ status: 500, message: 'Something went wrong.' }, { status: 500 });
  }

  const user = transformUser(userData);
  return Response.json({
    status: 200,
    message: 'Profile Fetched Successfully',
    data: user,
  });
};
