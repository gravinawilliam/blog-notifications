import { EmailTemplateProviderDTO } from '@dtos/_shared/providers/email-template-provider.dto';

export interface IEmailTemplateProvider {
  parse(
    params: EmailTemplateProviderDTO.Params,
  ): Promise<EmailTemplateProviderDTO.Result>;
}
