import { SendEmailProviderDTO } from '@dtos/_shared/providers/send-email-provider.dto';

export interface ISendEmailProvider {
  sendEmail(
    params: SendEmailProviderDTO.Params,
  ): Promise<SendEmailProviderDTO.Result>;
}
