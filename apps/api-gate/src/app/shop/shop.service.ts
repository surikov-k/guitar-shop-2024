import { Guitar, ShopItemEvent } from '@guitar-shop-2024/types';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateShopItemDto, UpdateShopItemDto } from './dto';
import { ShopItemQuery } from './query';

@Injectable()
export class ShopService {
  constructor(
    @Inject('SHOP_SERVICE') private readonly shopService: ClientProxy
  ) {}

  async create(dto: CreateShopItemDto): Promise<Guitar> {
    return firstValueFrom<Guitar>(
      this.shopService.send({ cmd: ShopItemEvent.Create }, { dto })
    );
  }

  async delete(id: number) {
    return firstValueFrom(
      this.shopService.send({ cmd: ShopItemEvent.Delete }, { id })
    );
  }

  async get(id: number): Promise<Guitar> {
     return firstValueFrom<Guitar>(
       this.shopService.send({ cmd: ShopItemEvent.Get }, { id })
     )
  }

  async getAll(query: ShopItemQuery): Promise<Guitar[]> {
    return firstValueFrom<Guitar[]>(
      this.shopService.send({ cmd: ShopItemEvent.GetAll }, { query })
    );
  }

  async update(id: number, dto: UpdateShopItemDto): Promise<Guitar> {
    return firstValueFrom<Guitar>(
      this.shopService.send({ cmd: ShopItemEvent.Update }, { id, dto })
    );
  }
}
