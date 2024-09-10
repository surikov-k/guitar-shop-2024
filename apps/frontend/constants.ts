export const SHOW_ERROR_TIMEOUT = 4000;

export enum AppRoute {
  Root = '/',
  Registration = '/registration',
  Login = '/login',
  ItemsList = 'list',
  Item = '/item/:id',
  AddItem = 'add',
  EditItem = 'item/:id/edit',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const BACKEND_URL = 'http://localhost:4000/api';
export const BACKEND_IMAGES_URL = 'http://localhost:3600/uploads';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_STORAGE_KEY = 'guitar-store-token'

export enum ApiRoute {
  Auth = 'auth/check',
  Login = 'auth/login',
  Register = 'auth/register',
  ShopItems = '/shop',
}

