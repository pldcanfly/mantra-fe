import { AxiosError, AxiosResponse } from 'axios';
import decode from 'jwt-decode';

type AccessTokenPayload = {
  id: number;
  username: string;
  role: string;
  iat: number;
  exp: number;
};

type RefreshTokenPayload = {
  id: number;
  iat: number;
  exp: number;
};

const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

const initialstate =
  accessToken !== null && refreshToken !== null
    ? (decode(accessToken) as AccessTokenPayload)
    : {
        username: '',
        id: 0,
        role: 'unregistered',
        exp: 0,
        iat: 0,
      };

const auth = {
  state: initialstate,
  mutations: {
    setState(state: AccessTokenPayload, payload: AccessTokenPayload) {
      state.username = payload.username;
      state.id = payload.id;
      state.role = payload.role;
      state.exp = payload.exp;
      state.iat = payload.iat;
    },
  },
  actions: {
    login(context: any, payload: { username: string; password: string }) {
      context
        .dispatch('API', { method: 'post', url: 'auth/login', data: payload })
        .then((res: AxiosResponse) => {
          localStorage.setItem('accessToken', res.data.message.accessToken);
          localStorage.setItem('refreshToken', res.data.message.refreshToken);
          context.commit('setState', decode(res.data.message.accessToken) as AccessTokenPayload);
          context.dispatch('addNotification', { type: 'sucess', message: 'Willkommen!' });
        })
        .catch(() => {
          context.dispatch('addNotification', { type: 'error', message: 'Falscher Username oder Passwort' });
        });
    },
    refresh(context: any) {
      if (context.getters.validToken('refreshToken')) {
        return context
          .dispatch('API', { method: 'post', url: 'auth/refresh', headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}` } })
          .then((res: AxiosResponse) => {
            localStorage.setItem('accessToken', res.data.message.accessToken);
            localStorage.setItem('refreshToken', res.data.message.refreshToken);
            context.commit('setState', decode(res.data.message.accessToken) as AccessTokenPayload);
          })
          .catch(() => context.dispatch('logout'));
      } else {
        return context.dispatch('logout');
      }
    },
    logout(context: any) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      context.commit('setState', { username: '', id: 0, role: 'unregistered', exp: 0, iat: 0 });
    },
  },
  getters: {
    validToken(state: any) {
      return (token: 'refreshToken' | 'accessToken') => {
        const checkedToken = localStorage.getItem(token);
        if (checkedToken !== null) {
          const tokenPayload = decode(checkedToken) as RefreshTokenPayload;
          if (tokenPayload.exp > Date.now() / 1000) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      };
    },
    accountInfo(state: any) {
      return state;
    },
  },
};

export default auth;
