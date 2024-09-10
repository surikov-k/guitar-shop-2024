import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

import { getMulterConfig } from './config';
import { ShopFileController } from './shop-file.controller';
import { ShopFileModel, ShopFileSchema } from './shop-file.model';
import { ShopFileRepository } from './shop-file.repository';
import { ShopFileService } from './shop-file.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ShopFileModel.name,
        schema: ShopFileSchema,
      },
    ]),
    MulterModule.registerAsync({
      useFactory: getMulterConfig,
      inject: [ConfigService],
    }),
  ],
  controllers: [ShopFileController],
  providers: [ShopFileService, ShopFileRepository],
})
export class ShopFileModule {}
