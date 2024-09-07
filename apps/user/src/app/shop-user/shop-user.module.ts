import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopUserController } from './shop-user.controller';
import { ShopUserModel, ShopUserSchema } from './shop-user.model';
import { ShopUserRepository } from './shop-user.repository';
import { ShopUserService } from './shop-user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: ShopUserModel.name,
      schema: ShopUserSchema
    }])
  ],
  controllers: [ShopUserController],
  exports: [ShopUserRepository],
  providers: [ShopUserService, ShopUserRepository],
})
export class ShopUserModule {}
