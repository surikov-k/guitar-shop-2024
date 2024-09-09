import { FileInterface } from '@guitar-shop-2024/types';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({
  collection: 'files',
  timestamps: true,
})
export class ShopFileModel extends Document implements FileInterface {
  @Prop({ required: true })
  filename: string;

  @Prop()
  userId: string;
}

export const ShopFileSchema = SchemaFactory.createForClass(ShopFileModel);
