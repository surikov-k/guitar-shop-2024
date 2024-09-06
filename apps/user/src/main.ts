/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app
    .get<ConfigService>(ConfigService);

  await app.startAllMicroservices();
  Logger.log(`🚀 Users microservice is started`);
}

bootstrap();

