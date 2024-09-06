import { Module } from '@nestjs/common';
import { ShopUserController } from './shop-user.controller';
import { ShopUserService } from './shop-user.service';

@Module({
  controllers: [ShopUserController],
  providers: [ShopUserService],
})
export class ShopUserModule {}
