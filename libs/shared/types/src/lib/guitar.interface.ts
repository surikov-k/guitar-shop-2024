import { GuitarType } from './guitar-type.enum';
import { StringNumber } from './string-number.type';

export interface Guitar {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;
  photo?: string;
  type: GuitarType;
  code: string;
  stringsNumber: StringNumber;
  price: number;
  userId: string;
}
