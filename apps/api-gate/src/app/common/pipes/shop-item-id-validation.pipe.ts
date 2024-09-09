import { ShopItemEvent } from '@guitar-shop-2024/types';
import {
  ArgumentMetadata, Inject,
  Injectable,
  NotFoundException,
  PipeTransform
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

const SHOP_ITEM_NOT_FOUND = 'Shop item not found';

@Injectable()
export class ShopItemIdValidationPipe implements PipeTransform {
  constructor(
    @Inject('SHOP_SERVICE')
    private readonly shopItemService: ClientProxy
  ) {}

  async transform(value: number, { type }: ArgumentMetadata) {
    if (type !== 'param') {
      throw new Error('This pipe must be used only with params!');
    }

    if (!value) {
      throw new NotFoundException(SHOP_ITEM_NOT_FOUND);
    }
    const item = await firstValueFrom(
      this.shopItemService.send({ cmd: ShopItemEvent.Get }, { id: value })
    )

    if (!item) {
      throw new NotFoundException(SHOP_ITEM_NOT_FOUND);
    }
    return value;
  }
}
