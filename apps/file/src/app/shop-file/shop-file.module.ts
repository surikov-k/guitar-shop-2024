import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

import { getMulterConfig } from './config';
import { ShopFileController } from './shop-file.controller';
import { ShopFileService } from './shop-file.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UploadModel.name,
        schema: UploadSchema,
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
