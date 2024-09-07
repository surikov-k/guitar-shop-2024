import { compare, genSalt, hash } from 'bcrypt';

import { AuthUser } from '@guitar-shop-2024/types';
import { Entity } from '@guitar-shop-2024/core';
import { SALT_ROUNDS } from '../app.constants';

export class ShopUserEntity implements AuthUser, Entity<string> {
  public passwordHash: string;
  public id?: string;
  public name?: string;
  public email?: string;

  constructor(user: AuthUser) {
    this.populate(user);
  }

  public toPlainObject() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      passwordHash: this.passwordHash
    };
  }

  public populate(data: AuthUser): void {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.passwordHash = data.passwordHash;
  }

  public async setPassword(password: string): Promise<ShopUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async validatePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  static fromObject(data: AuthUser): ShopUserEntity {
    return new ShopUserEntity(data);
  }

}
