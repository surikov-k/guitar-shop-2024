import { ConfigService } from '@nestjs/config';
import { ServeStaticModuleAsyncOptions } from '@nestjs/serve-static';
import path from 'path';
import { SERVE_ROOT } from '../../../app.constants';

// path.join(__dirname, '..', '../../uploads')
export function getServeStaticConfig(): ServeStaticModuleAsyncOptions {
  return {
    useFactory: (configService: ConfigService) => {
      return [
        {
          rootPath:  path.join(__dirname, '../../..', configService.get('uploads.path')),
          serveRoot: SERVE_ROOT
        }
      ];
    },
    inject: [ConfigService]
  };
}
