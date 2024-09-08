import { prepareDto } from '@guitar-shop-2024/helpers';
import { JwtPayload } from '@guitar-shop-2024/types';
import { Body, Controller, Get, HttpException, Post, UseGuards } from '@nestjs/common';
import { GetUserPayload } from '../common/decorators';
import { JwtAuthGuard } from '../common/guards';

import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { UserRdo } from './rdo';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('check')
  async checkAuth(@GetUserPayload() payload: JwtPayload) {
    return prepareDto(UserRdo, payload);
  }


  @Post('register')
  public async register(@Body() dto: RegisterDto) {
    try {
      const user = await this.authService.register(dto);
      return prepareDto(UserRdo, user);
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }


  @Post('login')
  public async login(@Body() dto: LoginDto) {
    try {
      return await this.authService.login(dto);
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }
}
