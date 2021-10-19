import { BaseService } from '../base.service';
import { HttpService } from '../http.service';

export const UserService = () => {
  const http = HttpService();

  const logIn = (data: any): Promise<any> => {
    return http.post(`auth/login`, data);
  };

  const logOut = (data: any): Promise<any> => {
    return http.post(`auth/logout`, data);
  };

  return { ...BaseService('users'), logIn, logOut };
};
