import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { LogLevel } from '@sentry/types';

import { envConfig } from '@main/config/env.config';
import typeormConfigDefault, {
  typeormConfigSecondary,
} from '@main/config/typeorm.config';

import { EmailsModule } from '../emails/emails.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SentryModule.forRoot({
      dsn: envConfig.sentry.dsn,
      logLevel: LogLevel.Verbose,
      environment: envConfig.sentry.environment,
    }),
    TypeOrmModule.forRoot(typeormConfigDefault),
    TypeOrmModule.forRoot(typeormConfigSecondary),
    EmailsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
