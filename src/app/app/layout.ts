import { redirect } from 'next/navigation';

import type { Layout } from '@/types';
import isAuthenticated from '@/lib/isAuthenticated';

const AppLayout: Layout = async ({ children }) => {
  const isLoggedIn = await isAuthenticated();

  return isLoggedIn ? children : redirect('/login');
};

export default AppLayout;
