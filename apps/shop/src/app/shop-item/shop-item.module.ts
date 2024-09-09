import { Module } from '@nestjs/common';

import { PrismaClientModule } from '@guitar-shop-2024/shop-models';
import { ShopItemController } from './shop-item.controller';
import { ShopItemService } from './shop-item.service';

@Module({
  imports: [PrismaClientModule],
  controllers: [ShopItemController],
  providers: [ShopItemService],
})
export class ShopItemModule {}
