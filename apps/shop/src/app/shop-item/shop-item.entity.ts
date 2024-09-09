import { Entity } from '@guitar-shop-2024/core';
import { Guitar, GuitarType, StringNumber } from '@guitar-shop-2024/types';


export class ShopItemEntity implements Entity<string, Guitar>, Guitar {
  public addedAt: Date;
  public code: string;
  public description: string;
  public id?: string;
  public name: string;
  public photo: string;
  public price: number;
  public stringsNumber: StringNumber;
  public type: GuitarType;

  populate(shopItem: Guitar) {
    this.addedAt = shopItem.addedAt ? shopItem.addedAt : new Date();
    this.code = shopItem.code;
    this.photo = shopItem.photo;
    this.description = shopItem.description;
    this.name = shopItem.name;
    this.price = shopItem.price;
    this.stringsNumber = shopItem.stringsNumber;
    this.type = shopItem.type;

    return this;
  }

  toPlainObject(): Guitar {
    return {
      ...this,
      photo: this.photo === null ? undefined : this.photo,
    };
  }

  static fromObject(data: Guitar): ShopItemEntity {
    return new ShopItemEntity()
      .populate(data);
  }

}
