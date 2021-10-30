import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SentryModule } from '@ntegral/nestjs-sentry';

import { envConfig } from '@main/config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SentryModule.forRoot({
      dsn: envConfig.sentry.dsn,
      environment: 'dev',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
