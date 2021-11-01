import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SentryModule } from '@ntegral/nestjs-sentry';

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
      environment: 'dev',
    }),
    TypeOrmModule.forRoot(typeormConfigDefault),
    TypeOrmModule.forRoot(typeormConfigSecondary),
    EmailsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
