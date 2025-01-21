import config from '@/config';

export const isServer = typeof globalThis === 'undefined';

export const isProduction = config.NODE_ENV === 'production';

export const isLive = config.ENV_TYPE === 'production';

export const getBase64 = async (file: File): Promise<FileReader['result']> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', error => reject(error));
  });

export const isProcessing = (data: unknown, isLoading: boolean): data is undefined =>
  isLoading && !data;
