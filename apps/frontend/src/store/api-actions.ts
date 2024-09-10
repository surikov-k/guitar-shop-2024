import { User } from '@guitar-shop-2024/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { jwtDecode } from 'jwt-decode';
import { ApiRoute, AuthStatus, SHOW_ERROR_TIMEOUT } from '../../constants';
import { saveToken } from '../services';
import { AppDispatch, JwtDecodeType, RegisterData, ShopItemType, State, UserData } from '../types';
import { AuthData } from '../types/auth-data';

import { adaptShopItem } from '../utils/utils';
import { store } from './';
import { loadShopItems, requireAuthorization, saveUser, setError } from './actions';


export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), SHOW_ERROR_TIMEOUT);
  }
);

export const fetchShopItemsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchShopItems',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<ShopItemType[]>(ApiRoute.ShopItems);
    dispatch(loadShopItems(data.map((item) => adaptShopItem(item))));
  }
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {

    try {
      const { data } = await api.get(ApiRoute.Auth);
      dispatch(requireAuthorization(AuthStatus.Auth));
      dispatch(saveUser(data));
    } catch {
      dispatch(requireAuthorization(AuthStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: { accessToken } } = await api.post<UserData>(ApiRoute.Login, { email, password });
    const payload = jwtDecode(accessToken) as JwtDecodeType;
    const user: User = { ...payload, id: payload.sub };

    saveToken(accessToken);
    dispatch(requireAuthorization(AuthStatus.Auth));
    dispatch(saveUser(user));
  }
);

export const registerAction = createAsyncThunk<void, RegisterData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/register',
  async (registerData, { dispatch, extra: api }) => {
    console.log('regesterData', registerData);
    const { data } = await api.post<string>(ApiRoute.Register, registerData);
    const payload = jwtDecode(data) as JwtDecodeType;
    const user: User = { ...payload, id: payload.sub };

    saveToken(data);
    dispatch(requireAuthorization(AuthStatus.Auth));
    dispatch(saveUser(user));
  }
);

