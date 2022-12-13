import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { getErrorMessage } from 'utils/errorUtils';
import { HttpServiceInterface } from './types';

class HttpService implements HttpServiceInterface {
  private static instance: HttpService;

  public static getHttpService(): HttpService {
    if (!HttpService.instance) {
      HttpService.instance = new HttpService();
    }

    return HttpService.instance;
  }

  private apiClient: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: {
      'Content-type': 'application/json',
    },
  });

  public get = async <R>(url: string, config?: AxiosRequestConfig) => {
    return this.apiClient
      .get<R>(url, config)
      .then((result) => result.data)
      .catch((error) => {
        throw getErrorMessage(error);
      });
  };

  public delete = async <R>(url: string, config?: AxiosRequestConfig) => {
    return this.apiClient
      .delete<R>(url, config)
      .then((result) => result.data)
      .catch((error) => {
        throw getErrorMessage(error);
      });
  };

  public post = async <R, D>(url: string, data?: D, config?: AxiosRequestConfig<D>) => {
    return this.apiClient
      .post<D, AxiosResponse<R>>(url, data, config)
      .then((result) => result.data)
      .catch((error) => {
        throw getErrorMessage(error);
      });
  };

  public put = async <T, D>(url: string, data: D, config?: AxiosRequestConfig) => {
    return this.apiClient
      .put<D, AxiosResponse<T>>(url, data, config)
      .then((result) => result.data)
      .catch((error) => {
        throw getErrorMessage(error);
      });
  };

  public patch = async <T, D>(url: string, data: D, config?: AxiosRequestConfig) => {
    return this.apiClient
      .patch<D, AxiosResponse<T>>(url, data, config)
      .then((result) => result.data)
      .catch((error) => {
        throw getErrorMessage(error);
      });
  };
}

export const httpService = HttpService.getHttpService();
