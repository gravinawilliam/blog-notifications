import { SendEmailControllerDTO } from '@dtos/emails/send-email.dto';

export interface ISendEmailController {
  handle(params: SendEmailControllerDTO.Params): Promise<SendEmailControllerDTO.Result>;
}
