import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseMongoRepository } from '@guitar-shop-2024/core';
import { ShopUserEntity } from './shop-user.entity';
import { ShopUserModel } from './shop-user.model';

@Injectable()
export class ShopUserRepository extends BaseMongoRepository<ShopUserEntity, ShopUserModel> {
  constructor(
    @InjectModel(ShopUserModel.name) shopUserModel: Model<ShopUserModel>
  ) {
    super(shopUserModel, ShopUserEntity.fromObject);
  }
  public async findByEmail(email: string): Promise<ShopUserEntity | null> {
    const document = await this.model.findOne({ email }).exec();
    return this.createEntityFromDocument(document);
  }
}
