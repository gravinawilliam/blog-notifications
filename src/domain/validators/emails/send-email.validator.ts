import { SendEmailValidatorDTO } from '@dtos/emails/send-email.dto';

export interface ISendEmailValidator {
  validate(params: SendEmailValidatorDTO.Params): Promise<SendEmailValidatorDTO.Result>;
}
