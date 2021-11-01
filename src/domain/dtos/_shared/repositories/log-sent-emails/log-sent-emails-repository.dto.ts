import { EmailTemplateModel } from '@models/email-template.model';
import { UserModel } from '@models/user.model';

export namespace CreateLogSentEmailRepositoryDTO {
  export type Params = {
    user: UserModel;
    emailTemplate: EmailTemplateModel;
    responseSent: unknown;
  };
  export type Result = void;
}
