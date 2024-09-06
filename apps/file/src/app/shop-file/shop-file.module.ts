import { Module } from '@nestjs/common';
import { ShopFileController } from './shop-file.controller';
import { ShopFileService } from './shop-file.service';

@Module({
  controllers: [ShopFileController],
  providers: [ShopFileService],
})
export class ShopFileModule {}
