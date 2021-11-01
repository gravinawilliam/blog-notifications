import { EmailTemplateModel } from './email-template.model';
import { UserModel } from './user.model';

export class LogSentEmailModel {
  user: UserModel;

  emailTemplate: EmailTemplateModel;

  responseSent: unknown;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;
}
