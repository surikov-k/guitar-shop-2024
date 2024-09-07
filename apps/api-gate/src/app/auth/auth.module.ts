import { RmqModule } from '@guitar-shop-2024/modules';
import { Module } from '@nestjs/common';
import { IsEmailUniqueConstraint } from '../common/validators';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    RmqModule.registerRmq({
      name: 'USER_SERVICE',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, IsEmailUniqueConstraint],
})
export class AuthModule {}
