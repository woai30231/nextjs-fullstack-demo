import { redirect } from 'next/navigation';

import type { Layout } from '@/types';
import isAuthenticated from '@/lib/isAuthenticated';

const AuthLayout: Layout = async ({ children }) => {
  const isLoggedIn = await isAuthenticated();

  return isLoggedIn ? redirect('/app') : children;
};

export default AuthLayout;
