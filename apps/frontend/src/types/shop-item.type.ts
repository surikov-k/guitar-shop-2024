
import { Guitar } from '@guitar-shop-2024/types';
import { GuitarTypeRus } from './guitar-type-rus.enum';

export type ShopItemType = Omit<Guitar, 'photo' | 'addedAt' | 'type'>
  & {
  photo: string,
  addedAt: string,
  type: GuitarTypeRus
};
