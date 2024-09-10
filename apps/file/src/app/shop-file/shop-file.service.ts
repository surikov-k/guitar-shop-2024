import { Injectable } from '@nestjs/common';
import { SaveFileDto } from './dto';
import { ShopFileEntity } from './shop-file.entity';
import { ShopFileRepository } from './shop-file.repository';

@Injectable()
export class ShopFileService {
  constructor(private readonly shopFileRepository: ShopFileRepository) {}

  public async save(upload: SaveFileDto) {
    return this.shopFileRepository.save(new ShopFileEntity(upload));
  }

}
