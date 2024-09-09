import { Guitar, ShopItemQueryInterface } from '@guitar-shop-2024/types';
import { Injectable } from '@nestjs/common';
import { ShopItemEntity } from './shop-item.entity';
import { ShopItemRepository } from './shop-item.repository';

@Injectable()
export class ShopItemService {
  constructor(
    private readonly shopItemRepository: ShopItemRepository
  ) {
  }

  async create(dto: Guitar): Promise<Guitar> {
    const entity = ShopItemEntity.fromObject(dto);
    return this.shopItemRepository.create(entity);
  }

  async delete(id: string) {
    await this.shopItemRepository.destroy(id);
  }

  async get(id: string): Promise<Guitar> {
    return this.shopItemRepository.findById(id);
  }

  async getAll(query: ShopItemQueryInterface): Promise<Guitar[]> {
    return this.shopItemRepository.find(query);
  }


  async update(id: string, dto: Guitar): Promise<Guitar> {
    const item = await this.shopItemRepository.findById(id);

    const entity = ShopItemEntity
      .fromObject({
        ...item,
        ...dto
      });

    return this.shopItemRepository.update(id, entity);
  }
}
