import type { NextRequest } from 'next/server';

type GetBody = <T>(request: NextRequest) => Promise<T>;

const getBody: GetBody = async (request) => {
  try {
    return await request.json();
  } catch {
    return null;
  }
};

export default getBody;
