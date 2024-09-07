import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

import { UserEvent } from '@guitar-shop-2024/types';
import { LoginDto, RegisterDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: ClientProxy
  ) {}

  public register(dto: RegisterDto) {
    return firstValueFrom(
      this.userService.send({ cmd: UserEvent.Register }, { dto })
    );
  }

  public login(dto: LoginDto) {
    return firstValueFrom(
      this.userService.send({ cmd: UserEvent.Login }, { dto })
    );
  }
}
