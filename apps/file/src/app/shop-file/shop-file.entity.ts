import { Entity } from '@guitar-shop-2024/core';
import { FileInterface } from '@guitar-shop-2024/types';


export class ShopFileEntity
  implements FileInterface, Entity<string> {
  id: string;
  filename: string;
  userId: string;

  constructor(file: FileInterface) {
    this.populate(file);
  }

  populate(file: FileInterface): void {
    this.id = file.id;
    this.filename = file.filename;
    this.userId = file.userId;
  }

  toPlainObject() {
    return {
      id: this.id,
      filename: this.filename,
      userId: this.userId
    };
  }

  static fromObject(data: FileInterface): ShopFileEntity {
    return new ShopFileEntity(data);
  }
}
