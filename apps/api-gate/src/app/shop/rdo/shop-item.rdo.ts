import { Expose, Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { GuitarType, StringNumber } from '@guitar-shop-2024/types';

export class ShopItemRdo {
  @ApiProperty({
    description: 'Guitar ID',
    example: '12',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'Guitar name',
    example: 'Fender Player Stratocaster',
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'Guitar description',
    example:
      'Weight-relieved mahogany body with maple top. Mahogany neck with asymmetrical profile, rosewood fingerboard with compound radius. Dual Tradbucker pickups with coil split, coil tap and phase controls. Nashville bridge, stopbar tailpiece and locking Grover tuners.',
  })
  @Expose()
  public description: string;

  @ApiProperty({
    description: 'The date the guitar was added',
    example: '2023-02-05T19:10:34.009Z',
  })
  @Expose()
  public addedAt: string;

  @ApiProperty({
    description: 'Guitar photos ids',
    example: [1],
  })
  @Expose()
  public photo: string;

  @ApiProperty({
    description: 'Guitar type',
    example: 'Electric',
  })
  @Expose()
  public type: GuitarType;

  @ApiProperty({
    description: 'Vendor code',
    example: '1500000000287968',
  })
  @Expose()
  public code: string;

  @ApiProperty({
    description: 'The number of strings',
    example: 6,
  })
  @Expose()
  public stringsNumber: StringNumber;

  @ApiProperty({
    description: 'Guitar price',
    example: 2399,
  })
  @Expose()
  @Type(() => Number)
  public price: number;


}
