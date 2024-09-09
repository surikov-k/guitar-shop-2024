import {
  ArgumentMetadata,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';

const SHOP_ITEM_NOT_FOUND = 'Shop item not found';

@Injectable()
export class ShopItemIdValidationPipe implements PipeTransform {
  // constructor(private readonly shopItemRepository: ShopItemRepository) {}

  async transform(value: number, { type }: ArgumentMetadata) {
    if (type !== 'param') {
      throw new Error('This pipe must be used only with params!');
    }
    // const item = await this.shopItemRepository.findById(value);

    // if (!item) {
    //   throw new NotFoundException(SHOP_ITEM_NOT_FOUND);
    // }
    return value;
  }
}
