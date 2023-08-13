import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

type UrlParams = Record<string, number | string>;

interface AxiosRequestConfigWithUrlParams extends AxiosRequestConfig {
  urlParams?: UrlParams;
}

export type Endpoints = Record<string, AxiosRequestConfigWithUrlParams>;

export interface InternalAxiosRequestConfigWithUrlParams extends InternalAxiosRequestConfig {
  urlParams?: UrlParams;
}

export type AxiosFn<T> = (data: AxiosRequestConfigWithUrlParams) => Promise<AxiosResponse<T>>;

export interface SuccessResponse<T = unknown> {
  status: number;
  message: string;
  token?: string;
  results: number;
  data: T;
}

export type SuccessPayloadResponse<T = unknown[]> = SuccessResponse<{
  docs: T;
  limit: number;
  page: number;
  totalDocs: number;
  totalPages: number;
}>;

export interface ErrorResponse {
  status: number;
  message: string;
  messages?: string[];
}
