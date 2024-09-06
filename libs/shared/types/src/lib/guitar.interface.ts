import { GuitarType } from './guitar-type.enum';
import { StringNumber } from './string-number.type';
import { File } from './file.interface';

export interface Guitar {
  id?: number;
  name: string;
  description: string;
  addedAt?: Date;
  photo?: File;
  type: GuitarType;
  code: string;
  stringsNumber: StringNumber;
  price: number;
  rating: number;
}
