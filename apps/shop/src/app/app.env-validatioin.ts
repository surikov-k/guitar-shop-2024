import { IsString, validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { EnvValidationMessage } from './app.constants';
import { RmgEnvironmentConfig } from '@guitar-shop-2024/modules';


class EnvironmentConfig extends RmgEnvironmentConfig {
  constructor() {
    super();
  }

  @IsString({
    message: EnvValidationMessage.RABBITMQ_QUEUE,
  })
  public RABBITMQ_SHOP_SERVICE_QUEUE: string;
}

export function validateEnvironment(config: Record<string, unknown>) {
  const environmentConfig = plainToInstance(EnvironmentConfig, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(environmentConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return environmentConfig;
}
