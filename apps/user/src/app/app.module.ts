import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import {
  ENV_FILE_PATH,
  RABBITMQ_ENV_FILE_PATH
} from './app.constants';
import databaseConfig from './config/database.config';
import { AuthModule } from './auth/auth.module';
import { RmqModule } from '@guitar-shop-2024/modules';
import { ShopUserModule } from './shop-user/shop-user.module';
import { getMongooseOptions, jwtOptions } from './config';
import { validateEnvironments } from './app.env-validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: [ENV_FILE_PATH, RABBITMQ_ENV_FILE_PATH],
      load: [databaseConfig, jwtOptions],
      validate: validateEnvironments
    }),
    MongooseModule.forRootAsync(getMongooseOptions()),
    AuthModule,
    RmqModule,
    ShopUserModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
