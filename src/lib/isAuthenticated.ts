import constants from '@/constants';
import cookieStore from '@/lib/cookieStore';

type IsAuthenticated = () => Promise<boolean>;

const isAuthenticated: IsAuthenticated = async () => {
  const hasCookie = await cookieStore.getAsync(constants.cookies.tokenName);
  return !!hasCookie;
};

export default isAuthenticated;
