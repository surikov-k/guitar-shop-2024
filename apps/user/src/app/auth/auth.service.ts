import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { RpcException } from '@nestjs/microservices';

import {
  JwtPayload,
  LoginInterface,
  RegisterInterface,
  Tokens,
  User } from '@guitar-shop-2024/types';

import { AuthError } from '../app.constants';
import { ShopUserEntity } from '../shop-user/shop-user.entity';
import { ShopUserRepository } from '../shop-user/shop-user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly shopUserRepository: ShopUserRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService
  ) {}

  async register(dto: RegisterInterface) {
    const {
      name,
      email,
      password,
    } = dto;
    const userData = {
      name,
      email,
      passwordHash: '',
    };

    const entity = new ShopUserEntity(userData);
    await entity.setPassword(password);
    const user = await this.shopUserRepository.save(entity);

    return await this.getTokens(this.getJwtPayload(user));
  }

  async verify(dto: LoginInterface) {
    const { email, password } = dto;
    const user = await this.shopUserRepository.findByEmail(email);

    console.log('auth.service verify', user);

    if (!user) {
      throw new RpcException({
        status: HttpStatus.UNAUTHORIZED,
        message: AuthError.WRONG_CREDENTIALS,
      });
    }

    const entity = new ShopUserEntity(user);

    if (!(await entity.validatePassword(password))) {
      throw new RpcException({
        status: HttpStatus.UNAUTHORIZED,
        message: AuthError.WRONG_CREDENTIALS,
      });
    }

    return entity.toPlainObject();
  }

  public async login(dto: LoginInterface) {
    const user = await this.verify(dto);

    console.log('auth.service login', user);

    return await this.getTokens(this.getJwtPayload(user));
  }


  public async getTokens(payload: JwtPayload): Promise<Tokens> {

    const [accessToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('jwt.accessTokenSecret'),
        expiresIn: +this.configService.get<number>('jwt.accessTokenExpiresIn'),
      }),
    ]);

    return {
      accessToken,
    };
  }

  getJwtPayload({ id, email, name  }: User): JwtPayload {
    return {
      sub: id,
      email,
      name,
    };
  }

  async checkEmail(email: string) {
    return this.shopUserRepository.findByEmail(email);
  }

  async getUser(userId: string) {
    return this.shopUserRepository.findById(userId);
  }
}
