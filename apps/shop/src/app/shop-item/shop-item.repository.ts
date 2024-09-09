import { Injectable } from '@nestjs/common';

import { BasePostgresRepository } from '@guitar-shop-2024/core';
import { Guitar, ShopItemQueryInterface } from '@guitar-shop-2024/types';
import { PrismaClientService } from '@guitar-shop-2024/shop-models';
import { ShopItemEntity } from './shop-item.entity';


@Injectable()
export class ShopItemRepository extends BasePostgresRepository<ShopItemEntity, Guitar> {
  constructor(
    protected readonly client: PrismaClientService,
  ) {
    super(client, ShopItemEntity.fromObject);
  }

  public async create(entity: ShopItemEntity): Promise<ShopItemEntity> {
    const data = entity.toPlainObject();
    const record = await this.client.shopItem.create({
      data: {
        ...data,
      },
    });
    entity.id = record.id;
    return entity;
  }

  public async destroy(id: string): Promise<void> {
    await this.client.shopItem.delete({ where: { id } });
  }

  public async findById(id: string): Promise<ShopItemEntity> {
    const document = await this.client.shopItem.findFirst({
      where: { id },
    });

    return this.createEntityFromDocument(document);
  }

  public async find(query: ShopItemQueryInterface): Promise<Guitar[]> {
    const { limit, type, strings, sort, direction, page } = query;

    const getSortOption = (type: ShopItemQueryInterface['sort']) => {
      const sortOption = {
        price: { price: direction },
        added: { addedAt: direction },
      };
      return sortOption[type];
    };

    return this.client.shopItem.findMany({
      take: limit,
      where: {
        type,
        stringsNumber: strings,
      },
      orderBy: [getSortOption(sort)],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }

  public async update(id: string, item: ShopItemEntity): Promise<ShopItemEntity> {
    const entityData = item.toPlainObject();

    const updatedItem = await this.client.shopItem.update({
      where: { id },
      data: {
        ...entityData,
      }
    });

    return this.createEntityFromDocument(updatedItem);
  }
}
