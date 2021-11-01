import { EmailTemplateProviderDTO } from './email-template-provider.dto';

export namespace SendEmailProviderDTO {
  type IMailContact = {
    name: string;
    email: string;
  };

  export type Params = {
    to: IMailContact;
    from: IMailContact;
    subject: string;
    templateData: EmailTemplateProviderDTO.Params;
  };

  export type Result = any;
}
