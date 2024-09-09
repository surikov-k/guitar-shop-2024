import { prepareDto } from '@guitar-shop-2024/helpers';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUserId } from '../common/decorators';
import { JwtAuthGuard } from '../common/guards';
import { ShopItemIdValidationPipe } from '../common/pipes';
import { CreateShopItemDto, UpdateShopItemDto } from './dto';

import { ShopItemQuery } from './query';
import { ShopItemListRdo, ShopItemRdo } from './rdo';
import { ShopService } from './shop.service';


@ApiTags('shop')
@Controller('shop')
export class ShopController {
  constructor(private readonly shopItemService: ShopService) {}

  @Get()
  @ApiResponse({
    type: [ShopItemListRdo],
    status: HttpStatus.OK,
    description: 'The list of shop items is found',
  })
  public async index(@Query() query: ShopItemQuery) {
    const items = await this.shopItemService.getAll(query);
    return items.map((item) => prepareDto(ShopItemListRdo, item));
  }

  @Get('/:id')
  @ApiResponse({
    type: ShopItemRdo,
    status: HttpStatus.OK,
    description: 'The shop item is found',
  })
  public async get(@Param('id', ShopItemIdValidationPipe) id: string) {
    const item = await this.shopItemService.get(id);
    return prepareDto(ShopItemRdo, item);
  }


  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    type: ShopItemRdo,
    status: HttpStatus.CREATED,
    description: 'Shop item is created',
  })
  public async create(
    @Body() dto: CreateShopItemDto,
    @CurrentUserId() userId: string
  ) {

    const item = await this.shopItemService.create({
      ...dto,
      userId
    });
    return prepareDto(ShopItemRdo, item);
  }

  @Patch('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    type: ShopItemRdo,
    description: 'Shop item is updated',
  })
  public async update(
    @Param('id', ShopItemIdValidationPipe) id: string,
    @Body() dto: UpdateShopItemDto
  ) {
    const item = await this.shopItemService.update(id, dto);
    return prepareDto(ShopItemRdo, item);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Shop item is deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id', ShopItemIdValidationPipe) id: number) {
    return this.shopItemService.delete(id);
  }
}
