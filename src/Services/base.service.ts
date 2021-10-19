import { AxiosResponse } from 'axios';
import { HttpService } from './http.service';

export const BaseService = (url: string) => {
  const http = HttpService();

  const get = () => {
    return http.get(url);
  };

  const post = (data?: any): Promise<any> => {
    return http.post(url, data);
  };

  const update = (id?: string, data?: any): Promise<AxiosResponse<any>> => {
    return http.put(`${url}/${id}`, data);
  };

  const remove = (id: string): Promise<AxiosResponse<any>> => {
    return http.remove(`${url}/${id}`);
  };

  return { get, post, update, remove };
};
