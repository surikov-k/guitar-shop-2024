import { RmqModule } from '@guitar-shop-2024/modules';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from '../config';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
    RmqModule.registerRmq({
      name: 'SHOP_SERVICE',
    }),
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
