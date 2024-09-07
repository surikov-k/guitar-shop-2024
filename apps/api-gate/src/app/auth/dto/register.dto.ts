import { IsEmail, MaxLength, MinLength } from 'class-validator';

import { IsEmailUnique } from '../../common/validators';
import { AuthError, PasswordLength, UsernameLength } from '../auth.constants';

export class RegisterDto {

  @IsEmail()
  @IsEmailUnique({
    message: AuthError.ALREADY_EXISTS,
  })
  public email: string;


  @MinLength(UsernameLength.MIN, {
    message: AuthError.NAME_TOO_SHORT,
    always: true,
  })
  @MaxLength(UsernameLength.MAX, {
    message: AuthError.NAME_TOO_LONG,
  })
  public name: string;


  @MinLength(PasswordLength.MIN, {
    message: AuthError.PASSWORD_TOO_SHORT,
  })
  @MaxLength(PasswordLength.MAX, {
    message: AuthError.PASSWORD_TOO_LONG,
  })
  public password: string;
}
