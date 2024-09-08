import {
  IsIn,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { GuitarType, StringNumber } from '@guitar-shop-2024/types';

import {
  CodeLength,
  DescriptionLength,
  NameLength,
  Price,
  ShopItemError,
} from '../shop.constants';

export class CreateShopItemDto {
  @ApiProperty({
    description:
      'Guitar name. Minimum length 10 characters, maximum length 100 characters.',
    example: 'Fender Player Stratocaster',
  })
  @IsString()
  @MinLength(NameLength.MIN, {
    message: ShopItemError.NAME_TOO_SHORT,
  })
  @MaxLength(NameLength.MAX, {
    message: ShopItemError.NAME_TOO_LONG,
  })
  public name: string;

  @ApiProperty({
    description:
      'Guitar description. The minimum length is 20 characters, the maximum length is 1024 characters.',
    example:
      'Weight-relieved mahogany body with maple top. Mahogany neck with asymmetrical profile, rosewood fingerboard with compound radius. Dual Tradbucker pickups with coil split, coil tap and phase controls. Nashville bridge, stopbar tailpiece and locking Grover tuners.',
  })
  @IsString()
  @MinLength(DescriptionLength.MIN, {
    message: ShopItemError.DESCRIPTION_TOO_SHORT,
  })
  @MaxLength(DescriptionLength.MAX, {
    message: ShopItemError.DESCRIPTION_TOO_LONG,
  })
  public description: string;

  @ApiProperty({
    description:
      'Guitar type. Required. One option from the list: Electric, Acoustic, Ukulele.',
    example: 'Electric',
  })
  @IsIn(['Electric', 'Acoustic', 'Ukulele'], {
    message: ShopItemError.WRONG_TYPE,
  })
  public type: GuitarType;

  @ApiProperty({
    description:
      'Vendor code. Required. The minimum length is 5 characters, the maximum is 40 characters.',
    example: '1500000000287968',
  })
  @IsString()
  @MinLength(CodeLength.MIN, {
    message: ShopItemError.CODE_TOO_SHORT,
  })
  @MaxLength(CodeLength.MAX, {
    message: ShopItemError.CODE_TOO_LONG,
  })
  public code: string;

  @ApiProperty({
    description:
      'The number of strings. Required. One of the options: 4, 6, 7, 12',
    example: 6,
  })
  @IsNumber()
  @IsIn([4, 6, 7, 12], {
    message: ShopItemError.INCORRECT_STINGS_NUMBER,
  })
  public stringsNumber: StringNumber;

  @ApiProperty({
    description:
      'Price. Required. A non-negative number between 100 and 1,000,000',
    example: 2399,
  })
  @IsNumber()
  @Min(Price.MIN, {
    message: ShopItemError.PRICE_TOO_LOW,
  })
  @Max(Price.MAX, {
    message: ShopItemError.PRICE_TOO_HIGH,
  })
  public price: number;
}
