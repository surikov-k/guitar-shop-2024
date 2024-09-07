import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ENV_FILE_PATH, RABBITMQ_ENV_FILE_PATH } from '../app.constants';
import { validateEnvironment } from '../app.env-validation';
import { AuthModule } from './auth/auth.module';
import { ShopModule } from './shop/shop.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      envFilePath: [ENV_FILE_PATH, RABBITMQ_ENV_FILE_PATH],
      isGlobal: true,
      load: [],
      validate: validateEnvironment
    }),
    AuthModule,
    UserModule,
    ShopModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
