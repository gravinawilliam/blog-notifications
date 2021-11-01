import { Controller, Post, Req, Res } from '@nestjs/common';

import { adapterRoute } from '@main/adapters/express-route-adapter';
import { makeSendEmailController } from '@main/factories/emails/send-email.factory';

@Controller('/emails')
export class SendEmailRoute {
  @Post('/send')
  send(@Req() request, @Res() response) {
    return adapterRoute(makeSendEmailController())(request, response);
  }
}
