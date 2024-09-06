import { Module } from '@nestjs/common';
import { ShopFileModule } from './shop-file/shop-file.module';

@Module({
  imports: [ShopFileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
