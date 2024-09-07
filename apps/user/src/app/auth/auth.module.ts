import { Module } from '@nestjs/common';
import { ShopUserModule } from '../shop-user/shop-user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [ShopUserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
