import { Module } from '@nestjs/common';
import { ShopItemModule } from './shop-item/shop-item.module';

@Module({
  imports: [ShopItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
