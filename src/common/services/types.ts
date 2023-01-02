import { AxiosRequestConfig } from 'axios';

export interface HttpServiceInterface {
  get<R>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<R, D>(url: string, data: D, config?: AxiosRequestConfig<D>): Promise<R>;
  put<R, D>(url: string, data: D, config?: AxiosRequestConfig<D>): Promise<R>;
  patch<R, D>(url: string, data: D, config?: AxiosRequestConfig<D>): Promise<R>;
  delete<R>(url: string, config?: AxiosRequestConfig): Promise<R>;
}

export enum LocalStorageKeys {
  cart = 'cart',
}
