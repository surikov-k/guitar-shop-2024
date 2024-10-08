import { getMongoConnectionString } from '@guitar-shop-2024/helpers';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService, registerAs } from '@nestjs/config';


export const mongoDbOptions = registerAs('database', () => ({
  name: process.env.MONGO_DB,
  host: process.env.MONGO_HOST,
  port: parseInt(process.env.MONGO_PORT, 10),
  user: process.env.MONGO_USER,
  password: process.env.MONGO_PASSWORD,
  authBase: process.env.MONGO_AUTH_BASE,
}));

export function getMongoDbConfig(): MongooseModuleAsyncOptions {
  return {
    useFactory: async (configService: ConfigService) => {
      return ({
        uri: getMongoConnectionString({
          username: configService.get<string>('database.user'),
          password: configService.get<string>('database.password'),
          host: configService.get<string>('database.host'),
          port: configService.get<number>('database.port'),
          authDatabase: configService.get<string>('database.authBase'),
          databaseName: configService.get<string>('database.name')
        })
      });
    },
    inject: [ConfigService],
  };
}
