import { ClassTransformOptions, plainToInstance } from 'class-transformer';

type PlainObject = Record<string, unknown>;

export function prepareDto<T, V >(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions
): T;

export function prepareDto<T, V>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions
): T[];

export function prepareDto<T, V>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions
): T | T[] {
  return plainToInstance(DtoClass, plainObject, {
    excludeExtraneousValues: true,
    ...options
  });
}

export function getMongoConnectionString({
                                           username,
                                           password,
                                           host,
                                           port,
                                           databaseName,
                                           authDatabase
                                         }): string {
  return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}
