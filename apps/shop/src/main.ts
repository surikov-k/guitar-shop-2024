/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { RmqService } from '@guitar-shop-2024/modules';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const rmqService = app
    .get<RmqService>(RmqService);
  const configService = app
    .get<ConfigService>(ConfigService);

  const queue = configService
    .get<string>('RABBITMQ_SHOP_SERVICE_QUEUE');
  app.connectMicroservice(rmqService.getOptions(queue));
  await app.startAllMicroservices();

  Logger.log(
    `🚀 Shop Worker is started`,
  );
}

bootstrap();
