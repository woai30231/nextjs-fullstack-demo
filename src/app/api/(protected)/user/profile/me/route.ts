import type { Route } from '@/types/api.type';
import users from '@/app/api/_mock/users';

export const GET: Route = async request => {
  const userId = 1;

  const userData = users.find(cur => cur.id === userId);
  if (!userData) {
    return Response.json({ status: 500, message: 'Something went wrong.' }, { status: 500 });
  }

  const user = {
    id: userData.id,
    email: userData.email,
    firstName: userData.firstName,
    lastName: userData.lastName,
    fullName: `${userData.firstName} ${userData.lastName}`,
  };

  return Response.json({
    status: 200,
    message: 'Profile Fetched Successfully',
    data: user,
  });
};
