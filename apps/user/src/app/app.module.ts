import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ShopUserModule } from './shop-user/shop-user.module';

@Module({
  imports: [AuthModule, ShopUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
