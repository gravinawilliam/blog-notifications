import * as fs from 'fs';
import handlebars from 'handlebars';

import { IEmailTemplateProvider } from '@domain/providers/email-template/email-template.provider';

import { EmailTemplateProviderDTO } from '@dtos/_shared/providers/email-template-provider.dto';

export class HandlebarsEMailTemplateProvider implements IEmailTemplateProvider {
  public async parse({
    file,
    variables,
  }: EmailTemplateProviderDTO.Params): Promise<EmailTemplateProviderDTO.Result> {
    const templateFileContet = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handlebars.compile(templateFileContet);
    return {
      parseTemplate: parseTemplate(variables),
    };
  }
}
