import { resolve } from 'path';

import { ISendEmailProvider } from '@domain/providers/send-email/send-email.provider';
import { ICreateLogSentEmailRepository } from '@domain/repositories/log-sent-emails/create-log-sent-email.repository';
import { ISendEmailUseCase } from '@domain/use-cases/emails/send-email.usecase';

import { SendEmailUseCaseDTO } from '@dtos/emails/send-email.dto';

export class SendEmailUseCase implements ISendEmailUseCase {
  constructor(
    private readonly logSentEmailsRepository: ICreateLogSentEmailRepository,
    private readonly sendEmailProvider: ISendEmailProvider,
  ) {}

  public async execute({
    user,
    emailTemplate,
    variables,
  }: SendEmailUseCaseDTO.Params): Promise<SendEmailUseCaseDTO.Result> {
    const file = resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      'src',
      'application',
      'use-cases',
      'emails',
      'templates',
      `${emailTemplate.fileName}`,
    );

    const responseSendEmail = await this.sendEmailProvider.sendEmail({
      subject: emailTemplate.subject,
      templateData: {
        file,
        variables,
      },
      to: {
        email: user.email,
        name: user.name,
      },
      from: {
        email: emailTemplate.fromEmail,
        name: emailTemplate.fromName,
      },
    });

    await this.logSentEmailsRepository.create({
      emailTemplate,
      user,
      responseSent: responseSendEmail,
    });

    return {
      send: responseSendEmail !== null,
    };
  }
}
