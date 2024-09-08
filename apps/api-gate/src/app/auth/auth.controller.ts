import { Body, Controller, Get, HttpException, Post, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AccessTokenGuard)
  public async checkAuth(@CurrentUserRole() role: UserRole) {
    return role;
  }


  @Post('register')
  public async register(@Body() dto: RegisterDto) {
    try {
      return await this.authService.register(dto);
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
