import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';

import { AllExceptionsFilter } from '@main/errors/all-exception.filter';
import { AppModule } from '@main/modules/_global/app.module';

import { envConfig } from './main/config/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(envConfig.application.port, () => {
    if (envConfig.application.nodeEnv !== 'PROD') {
      Logger.log(`✅ ${envConfig.application.port}`);
    }
  });
}
bootstrap();
