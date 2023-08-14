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

export interface TokenOutput {
  token: string;
}

export interface SuccessOutput<T = unknown> {
  status: number;
  message: string;
  results: T extends unknown[] ? number : number | undefined;
  data?: T;
}

interface DocsOutput<T = unknown[]> {
  docs: T;
  limit: number;
  page: number;
  totalDocs: number;
  totalPages: number;
}

export type SuccessDocsOutput<T> = SuccessOutput<DocsOutput<T>>;

export interface ErrorResponse {
  status: number;
  message: string;
  messages?: string[];
}

export type AxiosOutput<T = unknown, E = unknown> = AxiosFn<SuccessOutput<T> & E>;

export type AxiosDocsOutput<T = unknown[]> = AxiosFn<SuccessDocsOutput<T>>;
