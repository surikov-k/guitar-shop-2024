import {ConfigService} from '@nestjs/config';

import { getMongoConnectionString } from '@guitar-shop-2024/helpers';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

export function getMongooseOptions(): MongooseModuleAsyncOptions {
  return {
    useFactory: async (configService: ConfigService) => ({
      uri: getMongoConnectionString({
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.password'),
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        authDatabase: configService.get<string>('database.authBase'),
        databaseName: configService.get<string>('database.database'),
      })
    }),
    inject: [ConfigService]
  }
}
