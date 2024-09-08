import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

import {
  GuitarType,
  QuerySortDirection,
  StringNumber
} from '@guitar-shop-2024/types';
import { normalizeGuitarType } from '@guitar-shop-2024/helpers';
import { ShopItemError, ShopItemQueryDefault } from '../shop.constants';


enum ShopItemQuerySort {
  Price = 'price',
  Rating = 'rating',
  Added = 'added',
}

enum ShopItemQueryStringsFilter {
  four = 4,
  six = 6,
  seven = 7,
  twelve = 12
}

export class ShopItemQuery {

  @ApiPropertyOptional({
    description: 'A limit of the shop items per page',
    default: ShopItemQueryDefault.ITEMS_PER_PAGE
  })
  @Transform(({ value }) => parseInt(value, 10) || ShopItemQueryDefault.ITEMS_PER_PAGE as number)
  @IsNumber()
  @IsOptional()
  public limit: number = ShopItemQueryDefault.ITEMS_PER_PAGE as number;

  @ApiPropertyOptional({
    description: 'A page of the shop items list',
    default: 1
  })
  @Transform(({ value }) => parseInt(value, 10) || 1)
  @IsNumber()
  @IsOptional()
  public page: number;


  @ApiPropertyOptional({
    description: 'Shop items list guitar type filter',
    enum: GuitarType
  })
  @Transform(({ value }) => normalizeGuitarType(value))
  @IsOptional()
  @IsIn(['Electric', 'Acoustic', 'Ukulele'], {
    message: ShopItemError.WRONG_TYPE
  })
  public type: GuitarType;


  @ApiPropertyOptional({
    description: 'Shop items list strings filter',
    type: StringNumber,
    enum: ShopItemQueryStringsFilter
  })
  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  @IsIn([4, 6, 7, 12], {
    message: ShopItemError.INCORRECT_STINGS_NUMBER
  })
  public strings: StringNumber;


  @ApiPropertyOptional({
    description: 'Shop items list sort type',
    enum: ShopItemQuerySort
  })
  @IsOptional()
  @IsIn(['price', 'rating', 'added'])
  public sort: 'price' | 'rating' | 'added' = ShopItemQueryDefault.SORTED_BY_ADDED_AT;


  @ApiPropertyOptional({
    description: 'Shop items list sort direction',
    enum: QuerySortDirection
  })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  public direction: 'desc' | 'asc' = ShopItemQueryDefault.SORT_DIRECTION_DESC;
}

