import { GuitarType } from './guitar-type.enum';
import { StringNumber } from './string-number.type';

export interface Guitar {
  id?: number;
  name: string;
  description: string;
  addedAt?: Date;
  photo?: string;
  type: GuitarType;
  code: string;
  stringsNumber: StringNumber;
  price: number;
  rating: number;
}
