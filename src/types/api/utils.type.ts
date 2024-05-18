import type { AxiosErr, AxiosRes } from '@/types/api/axios';

export type ThrowAxiosError = (err: unknown) => void;

export type ShowToast = (res: AxiosRes | AxiosErr) => void;
