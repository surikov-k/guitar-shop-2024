import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

import { IsEmailUnique } from '../../common/validators';
import { AuthError, PasswordLength, UsernameLength } from '../auth.constants';

export class RegisterDto {

  @ApiProperty({
    description: 'A unique email address',
    example: 'willis.white@yahoo.com'
  })
  @IsEmail()
  @IsEmailUnique({
    message: AuthError.ALREADY_EXISTS,
  })
  public email: string;


  @ApiProperty({
    description: 'A user name',
    example: 'Willis White',
  })
  @MinLength(UsernameLength.MIN, {
    message: AuthError.NAME_TOO_SHORT,
    always: true,
  })
  @MaxLength(UsernameLength.MAX, {
    message: AuthError.NAME_TOO_LONG,
  })
  public name: string;


  @ApiProperty({
    description: 'A user password',
    example: '123456'
  })
  @MinLength(PasswordLength.MIN, {
    message: AuthError.PASSWORD_TOO_SHORT,
  })
  @MaxLength(PasswordLength.MAX, {
    message: AuthError.PASSWORD_TOO_LONG,
  })
  public password: string;
}
