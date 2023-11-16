import config from '@/config';

export const isServer = typeof window === 'undefined';

export const isProduction = config.NODE_ENV === 'production';

export const getBase64 = async (file: File): Promise<FileReader['result']> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export const isProcessing = (data: unknown, isLoading: boolean): data is undefined =>
  isLoading && !data;
