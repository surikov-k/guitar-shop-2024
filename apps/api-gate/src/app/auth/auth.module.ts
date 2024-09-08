import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { IsEmailUniqueConstraint } from '../common/validators';
import { JwtAccessStrategy } from '../common/strategies';
import { Module } from '@nestjs/common';
import { getJwtConfig } from '../config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RmqModule } from '@guitar-shop-2024/modules';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
    RmqModule.registerRmq({
      name: 'USER_SERVICE',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, IsEmailUniqueConstraint, JwtAccessStrategy],
})
export class AuthModule {}
