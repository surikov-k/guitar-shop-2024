import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';

import { LoginInterface, RegisterInterface, UserEvent } from '@guitar-shop-2024/types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: UserEvent.Register })
  public async register(@Payload() { dto }: { dto: RegisterInterface }) {
    return await this.authService.register(dto);
  }

  @MessagePattern({ cmd: UserEvent.Login })
  public async login(@Payload() { dto }: { dto: LoginInterface }) {
    return this.authService.login(dto);
  }

  @MessagePattern({ cmd: UserEvent.Verify })
  public async verify(@Payload() { dto }: { dto: LoginInterface }) {
    return this.authService.verify(dto);
  }

  @MessagePattern({ cmd: UserEvent.CheckEmail })
  checkEmail(
    @Payload()
      { email }: { email: string }
  ) {
    return this.authService.checkEmail(email);
  }

  @MessagePattern({ cmd: UserEvent.GetUser })
  getUser(
    @Payload()
      { userId }: { userId: string }
  ) {
    return this.authService.getUser(userId);
  }
}
