import { User } from '@guitar-shop-2024/types';


export type JwtDecodeType = Pick<User, 'name' | 'email'> & {sub: string}
