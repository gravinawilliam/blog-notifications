import { SendEmailController } from '@application/controllers/emails/send-email.controller';
import { SendEmailUseCase } from '@application/use-cases/emails/send-email.usecase';
import { RequiredFieldsValidator } from '@application/validators/_shared/required-fields.validator';
import { SendEmailValidator } from '@application/validators/emails/send-email.validator';

import EmailTemplatesTypeormRepository from '@infra/database/typeorm/repositories/email-templates-typeorm.repository';
import LogSentEmailsTypeormRepository from '@infra/database/typeorm/repositories/log-sent-emails-typerom.repository';
import UsersTypeormRepository from '@infra/database/typeorm/repositories/users-typeorm.repository';
import { HandlebarsEMailTemplateProvider } from '@infra/providers/email-template/handlebars-email-template.provider';
import { EmailValidator } from '@infra/providers/email-validator/email.validator';
import { SESSendEmailProvider } from '@infra/providers/send-email/ses-send-email.provider';

import { IController } from '@shared/interfaces/controller.interface';

export const makeSendEmailController = (): IController => {
  const requiredFieldsValidator = new RequiredFieldsValidator();
  const emailValidator = new EmailValidator();
  const usersRepository = new UsersTypeormRepository();
  const emailTemplatesRepository = new EmailTemplatesTypeormRepository();
  const sendEmailValidator = new SendEmailValidator(
    emailValidator,
    requiredFieldsValidator,
    usersRepository,
    emailTemplatesRepository,
  );
  const logSentEmailsRepository = new LogSentEmailsTypeormRepository();
  const emailTemplateProvider = new HandlebarsEMailTemplateProvider();
  const sendEmailProvider = new SESSendEmailProvider(emailTemplateProvider);
  const sendEmailUseCase = new SendEmailUseCase(
    logSentEmailsRepository,
    sendEmailProvider,
  );
  return new SendEmailController(sendEmailUseCase, sendEmailValidator);
};
