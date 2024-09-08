import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {


  @ApiProperty({
    description: 'A email of the user',
    example: 'willis.white@yahoo.com',
  })
  @IsEmail()
  public email: string;


  @ApiProperty({
    description: 'A password of the user',
    example: '123456',
  })
  @IsString()
  public password: string;
}
