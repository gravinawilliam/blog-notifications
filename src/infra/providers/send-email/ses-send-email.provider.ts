import * as aws from 'aws-sdk';
import { Transporter, createTransport } from 'nodemailer';

import { IEmailTemplateProvider } from '@domain/providers/email-template/email-template.provider';
import { ISendEmailProvider } from '@domain/providers/send-email/send-email.provider';

import { SendEmailProviderDTO } from '@dtos/_shared/providers/send-email-provider.dto';

export class SESSendEmailProvider implements ISendEmailProvider {
  private client: Transporter;

  constructor(private readonly emailTemplateProvider: IEmailTemplateProvider) {
    this.client = createTransport({
      SES: new aws.SES({
        apiVersion: '2010-12-01',
        region: 'us-east-1',
      }),
    });
  }

  public async sendEmail({
    subject,
    templateData,
    to,
    from,
  }: SendEmailProviderDTO.Params): Promise<any> {
    const { parseTemplate } = await this.emailTemplateProvider.parse(
      templateData,
    );
    return this.client.sendMail({
      from: {
        name: from.name,
        address: from.email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: parseTemplate,
    });
  }
}
