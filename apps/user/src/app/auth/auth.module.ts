import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ShopUserModule } from '../shop-user/shop-user.module';
import { getJwtConfig } from '../config';

@Module({
  imports: [
    ShopUserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),

  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
