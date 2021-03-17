import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const APIURL = process.env.VUE_APP_API;

interface APIRequest {
  method: 'get' | 'delete' | 'post' | 'put' | 'patch';
  url: string;
  data?: any;
  config?: any;
  headers?: any;
}

const api = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    API(context: any, { method, url, data, config, headers }: APIRequest) {
      const options: AxiosRequestConfig = {
        method,
        url: APIURL + url,
        data,
        headers: headers || {},
        ...config,
      };

      if (context.getters.validToken !== undefined) {
        if (context.getters.validToken('accessToken') && url != 'auth/refresh') {
          // ACCESS VALID
          options.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`;
          return axios(options);
        } else if (context.getters.validToken('refreshToken') && url != 'auth/refresh') {
          // ACCESS INVALID .. REFRESH VALID
          return context.dispatch('refresh').then(() => {
            options.url = url;
            return context.dispatch('API', options);
          });
        } else {
          // NOTHING VALID .. Authless-request?
          context.dispatch('logout');
          return axios(options);
        }
      } else {
        console.log('no Auth');
        return axios(options);
      }
    },
  },
};

export default api;
