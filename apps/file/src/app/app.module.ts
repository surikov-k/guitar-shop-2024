import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ENV_FILE_PATH } from '../app.constants';
import { validateEnvironment } from '../app.env-validation';
import { ShopFileModule } from './shop-file/shop-file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [],
      validate: validateEnvironment
    }),
    ShopFileModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
