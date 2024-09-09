import { Guitar, ShopItemEvent, ShopItemQueryInterface } from '@guitar-shop-2024/types';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ShopItemService } from './shop-item.service';

@Controller('shop-item')
export class ShopItemController {
  constructor(
    private readonly shopItemService: ShopItemService
  ) {}

  @EventPattern({cmd: ShopItemEvent.GetAll})
  async index(
    @Payload() { query }: { query: ShopItemQueryInterface }
  ) {
    return await this.shopItemService.getAll(query);
  }

  @EventPattern({cmd: ShopItemEvent.Get})
  async get(
    @Payload() { id }: { id: string }
  ) {
    return await this.shopItemService.get(id);
  }

  @EventPattern({cmd: ShopItemEvent.Create})
  async create(
    @Payload() { dto }: { dto: Guitar }
  ) {
    return await this.shopItemService.create(dto);
  }

  @EventPattern({cmd: ShopItemEvent.Update})
  async update(
    @Payload() { id, dto }: { id: string, dto: Guitar }
  ) {
    return await this.shopItemService.update(id, dto);
  }

  @EventPattern({cmd: ShopItemEvent.Delete})
  async delete(
    @Payload() { id }: { id: string }
  ) {
    return await this.shopItemService.delete(id);
  }
}
