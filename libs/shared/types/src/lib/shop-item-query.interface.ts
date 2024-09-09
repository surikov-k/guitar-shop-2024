import { StringNumber } from './string-number.type';
import { GuitarType } from './guitar-type.enum';

export interface ShopItemQueryInterface {

   limit: number;
   page: number;
   type: GuitarType;
   strings: StringNumber;
   sort: 'price' | 'rating' | 'added';
   direction: 'desc' | 'asc';
}
