import { prepareDto } from '@guitar-shop-2024/helpers';
import {
  Controller,
  FileTypeValidator, HttpCode,
  HttpStatus,
  MaxFileSizeValidator, Param, ParseFilePipe,
  Post, UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse } from '@nestjs/swagger';
import { UploadFile } from '../../app.constants';
import { SaveFileRdo } from './rdo';
import { ShopFileService } from './shop-file.service';
import { diskStorage } from 'multer';

@Controller('upload')
export class ShopFileController {
  private static parseFilePipeOptions = {
    validators: [
      new FileTypeValidator({fileType: UploadFile.ALLOWED_TYPE}),
      new MaxFileSizeValidator({ maxSize: UploadFile.MAX_SIZE }),
    ],
  };

  constructor(private readonly fileService: ShopFileService) {}

  // private static generateUploadFileName = (req, file, cb) => {
  //   const newName = `${Date.now()}.${file.originalname}`;
  //   cb(null, newName);
  // };
  //
  // private static fileInterceptorOptions = {
  //   storage: diskStorage({
  //     destination: UploadFile.DIRECTORY,
  //     filename: ShopFileController.generateUploadFileName,
  //   }),
  // };

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'File is created',
  })
  @HttpCode(HttpStatus.CREATED)
  public async saveFile(
    @UploadedFile(
      new ParseFilePipe(ShopFileController.parseFilePipeOptions)
    )
      { filename }: Express.Multer.File,
  ) {
    const file = await this.fileService.save({
      filename,
    });

    return prepareDto(SaveFileRdo, file);
  }
}
