type Environment = 'development' | 'production';

const environments = {
  NODE_ENV: process.env.NODE_ENV as Environment,
  NEXT_PUBLIC_API_PATH: process.env.NEXT_PUBLIC_API_PATH as string,
};

const constants = {
  tokenName: 'token',
};

const config = { ...environments, ...constants };

export default config;
