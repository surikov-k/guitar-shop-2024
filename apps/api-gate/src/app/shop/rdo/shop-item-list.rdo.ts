import { ApiProperty, OmitType } from '@nestjs/swagger';
import { ShopItemRdo } from './shop-item.rdo';
import { Expose, Transform } from 'class-transformer';

export class ShopItemListRdo extends OmitType(ShopItemRdo, ['comments'] as const) {
  @ApiProperty({
    description: 'Number of comments',
    example: 3,
  })
  @Expose()
  @Transform(({value}) => value.length)
  public comments: number;
}
