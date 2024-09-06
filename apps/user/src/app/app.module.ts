import { RmqModule } from '@guitar-shop-2024/modules';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ENV_FILE_PATH, RABBITMQ_ENV_FILE_PATH } from './app.constants';

import { validateEnvironments } from './app.env-validation';
import { AuthModule } from './auth/auth.module';
import { ShopUserModule } from './shop-user/shop-user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: [ENV_FILE_PATH, RABBITMQ_ENV_FILE_PATH],
      load: [],
      validate: validateEnvironments
    }),
    AuthModule,
    RmqModule,
    ShopUserModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
