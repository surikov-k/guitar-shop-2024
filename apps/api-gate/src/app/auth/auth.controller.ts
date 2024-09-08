import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards
} from '@nestjs/common';

import { prepareDto } from '@guitar-shop-2024/helpers';
import { JwtPayload } from '@guitar-shop-2024/types';
import { GetUserPayload } from '../common/decorators';
import { JwtAuthGuard } from '../common/guards';

import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { UserRdo } from './rdo';

@ApiTags('authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User is successfully authenticated'
  })
  @UseGuards(JwtAuthGuard)
  @Get('check')
  async checkAuth(@GetUserPayload() payload: JwtPayload) {
    return prepareDto(UserRdo, payload);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'A new user was successfully created.'
  })
  @Post('register')
  public async register(@Body() dto: RegisterDto) {
    try {
      const user = await this.authService.register(dto);
      return prepareDto(UserRdo, user);
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  @ApiResponse({
    type: LoginDto,
    status: HttpStatus.OK,
    description: 'The user has been successfully logged in.'
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'The password or email is incorrect.',
  })
  @Post('login')
  public async login(@Body() dto: LoginDto) {
    try {
      return await this.authService.login(dto);
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }
}
