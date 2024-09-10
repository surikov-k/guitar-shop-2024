import { createReducer } from '@reduxjs/toolkit';

import { User } from '@guitar-shop-2024/types';
import { AuthStatus } from '../../constants';
import { ShopItemType } from '../types';
import { loadShopItems, requireAuthorization, saveUser, setError } from './actions';

const initialState: {
  shopItems: ShopItemType[];
  authStatus: AuthStatus;
  user: User | null;
  error: string | null;
} = {
  shopItems: [],
  authStatus: AuthStatus.Unknown,
  user: null,
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadShopItems, (state, action) => {
    state.shopItems = action.payload;
  })
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(saveUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
});
