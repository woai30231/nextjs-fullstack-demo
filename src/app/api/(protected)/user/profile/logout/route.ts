import constants from '@/constants';
import cookieStore from '@/lib/cookieStore';

import type { Route } from '@/types/api.type';

export const POST: Route = async () => {
  await cookieStore.deleteAsync(constants.cookies.tokenName);

  return Response.json({
    status: 200,
    message: 'Logged out successfully.',
  });
};
