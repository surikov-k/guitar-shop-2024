import { AUTH_TOKEN_STORAGE_KEY } from '../../constants';
import { TokenType } from '../types';

export const getToken = (): TokenType => {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
  return token ?? '';
}

export const saveToken = (token: TokenType) => {
  localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token)
}

export const dropToken = () => {
  localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
}
