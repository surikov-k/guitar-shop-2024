import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ENV_FILE_PATH } from '../app.constants';
import { validateEnvironment } from '../app.env-validation';
import { getMongoDbConfig, getServeStaticConfig, mongoDbOptions, multerEnvOptions } from './shop-file/config';
import { ShopFileModule } from './shop-file/shop-file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [mongoDbOptions, multerEnvOptions],
      validate: validateEnvironment
    }),
    ShopFileModule,
    MongooseModule.forRootAsync(getMongoDbConfig()),
    ServeStaticModule.forRootAsync(getServeStaticConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
