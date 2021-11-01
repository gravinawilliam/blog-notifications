import { Module } from '@nestjs/common';

import { SendEmailController } from '@application/controllers/emails/send-email.controller';

import { SendEmailRoute } from './routes/send-email.route';

@Module({
  controllers: [SendEmailRoute],
  providers: [SendEmailController],
})
export class EmailsModule {}
