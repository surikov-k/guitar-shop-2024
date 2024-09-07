import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { AuthUser } from '@guitar-shop-2024/types';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class ShopUserModel extends Document implements AuthUser {

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public name: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;
}

export const ShopUserSchema = SchemaFactory.createForClass(ShopUserModel);
