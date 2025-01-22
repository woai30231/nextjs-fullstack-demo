import users, { transformUser } from '@/app/api/_mock/users';
import getUserData from '@/app/api/_utils/getUserData';

import type { Route } from '@/types/api.type';

export const GET: Route = async request => {
  const user = getUserData(request);

  const userData = users.find(cur => cur.id === user.id);
  if (!userData) {
    return Response.json(
      { status: 500, message: 'It’s not you. It’s us. Give it another try, please!' },
      { status: 500 }
    );
  }

  const data = transformUser(userData);
  return Response.json({
    status: 200,
    message: 'Profile Fetched Successfully',
    data,
  });
};
