import type { Route } from '@/types/api.type';
import cookieStore from '@/lib/cookieStore';
import constants from '@/constants';

export const POST: Route = async () => {
  await cookieStore.deleteAsync(constants.cookies.tokenName);

  return Response.json({
    status: 200,
    message: 'Logged out successfully.',
  });
};
