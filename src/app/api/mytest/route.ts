import constants from '@server/_/constants';
import sendRes from '@server/_/functions/sendRes';

import type { Route } from '@server/_/types';

interface LoginRequestDTO {
  email: string;
  password: string;
}

export const GET: Route = async () => {
  
  return sendRes(undefined, constants.SUCCESS, {
    message: "我写的test api 目录",
  });
};
