import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [AuthModule, UserModule, ShopModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
