import axios from 'axios';
import { setItem, getItem } from '../Shared/Utils/AsyncStorageFunctions';

export const HttpService = () => {
  axios.interceptors.request.use(
    async (config) => {
      const token = getItem('@token');
      config.headers.Authorization = `Bearer ${token}`;
      // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
      config.baseURL = 'http://192.168.1.8:8080/api/v1/';

      return config;
    },
    (error) => {
      return console.log(error);
    }
  );

  axios.interceptors.response.use(
    (e) => {
      return e;
    },
    async (error) => {
      const oldToken = await getItem('@token');

      if (error.response.data.statusCode === 401) {
        const newToken = await axios.put(
          'http://192.168.1.8:8080/api/v1/token/refresh',
          { oldToken }
        );

        setItem('@token', newToken.data.access_token);
        return axios.request(error.config);
      }
    }
  );

  return {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    remove: axios.delete,
  };
};
