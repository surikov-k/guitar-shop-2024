import { Injectable } from '@nestjs/common';
import { ShopUserRepository } from '../shop-user/shop-user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly shopUserRepository: ShopUserRepository
  ) {}
}
