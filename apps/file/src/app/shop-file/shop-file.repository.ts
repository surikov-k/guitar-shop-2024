import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { BaseMongoRepository } from '@guitar-shop-2024/core';
import { ShopFileEntity } from './shop-file.entity';
import { ShopFileModel } from './shop-file.model';

@Injectable()
export class ShopFileRepository extends BaseMongoRepository<ShopFileEntity, ShopFileModel> {
  constructor(
    @InjectModel(ShopFileModel.name) shopFileModel: Model<ShopFileModel>
  ) {
    super(shopFileModel, ShopFileEntity.fromObject);
  }
}
