import { User } from '@guitar-shop-2024/types';
import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../../constants';
import { ShopItemType } from '../types';

export const loadShopItems = createAction<ShopItemType[]>('data/loadShopItems');

export const requireAuthorization = createAction<AuthStatus>(
  'user/requireAuthorization'
);

export const saveUser = createAction<User | null>(
  'user/saveUsername'
);


export const setError = createAction<string | null>('app/setError')
