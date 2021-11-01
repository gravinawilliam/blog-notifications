import { ISendEmailController } from '@domain/controllers/emails/send-email.controller';
import { ISendEmailUseCase } from '@domain/use-cases/emails/send-email.usecase';
import { ISendEmailValidator } from '@domain/validators/emails/send-email.validator';

import { IHttpRequest } from '@shared/interfaces/http-request.interface';
import { IHttpResponse } from '@shared/interfaces/http-response.interface';
import { ok } from '@shared/utils/http-response';

export class SendEmailController implements ISendEmailController {
  constructor(
    private readonly sendEmailUseCase: ISendEmailUseCase,
    private readonly sendEmailValidator: ISendEmailValidator,
  ) {}

  public async handle(params: IHttpRequest): Promise<IHttpResponse> {
    const { emailUser, typeEmail, variables } = params.body;

    const validated = await this.sendEmailValidator.validate({
      emailUser,
      typeEmail,
    });
    if (validated.isLeft()) return validated.value;
    const { emailTemplate, user } = validated.value;

    const sendEmail = await this.sendEmailUseCase.execute({
      emailTemplate,
      user,
      variables,
    });

    return ok(sendEmail);
  }
}
