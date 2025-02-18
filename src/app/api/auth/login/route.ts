import users from '@/app/api/_mock/users';
import constants from '@/constants';
import cookieStore from '@/lib/cookieStore';

import type { Route } from '@/types/api.type';

export const POST: Route = async (request) => {
  const body = await request.json();

  const user = users.find(
    (cur) => cur.email === body.email.toLowerCase() && cur.password === body.password,
  );

  if (!user) {
    return Response.json({ status: 400, message: 'Invalid username/password.' }, { status: 400 });
  }

  await cookieStore.setAsync(constants.cookies.tokenName, user.id.toString(), {
    httpOnly: true,
    sameSite: 'strict',
  });

  return Response.json(
    {
      status: 200,
      message: 'Logged In Successfully.',
    },
    {
      status: 200,
    },
  );
};
