import { IFindEmailTemplatesByTypeRepository } from '@domain/repositories/email-templates/find-email-templates-by-type.repository';
import { IFindUserByEmailRepository } from '@domain/repositories/users/find-user-by-email.repository';
import { IEmailValidator } from '@domain/validators/_shared/email.validator';
import { IRequiredFieldsValidator } from '@domain/validators/_shared/required-fields.validator';
import { ISendEmailValidator } from '@domain/validators/emails/send-email.validator';

import { SendEmailValidatorDTO } from '@dtos/emails/send-email.dto';

import { left, right } from '@shared/utils/either';
import { badRequest } from '@shared/utils/http-response';

export class SendEmailValidator implements ISendEmailValidator {
  constructor(
    private readonly emailValidator: IEmailValidator,
    private readonly requiredFieldsValidator: IRequiredFieldsValidator,
    private readonly usersRepository: IFindUserByEmailRepository,
    private readonly emailsRepository: IFindEmailTemplatesByTypeRepository,
  ) {}

  public async validate({
    typeEmail,
    emailUser,
  }: SendEmailValidatorDTO.Params): Promise<SendEmailValidatorDTO.Result> {
    const requiredFields = this.requiredFieldsValidator.verify({
      fields: [emailUser, typeEmail],
      fieldNames: ['email of user', 'typeEmail'],
    });
    if (requiredFields.isLeft()) return left(requiredFields.value);

    const emailValid = this.emailValidator.isEmailValid({
      email: emailUser,
    });
    if (!emailValid) return left(badRequest(new Error('Invalid email')));

    const userExists = await this.usersRepository.findByEmail({
      email: emailUser,
    });
    if (userExists.isLeft()) return left(userExists.value);

    const emailExists = await this.emailsRepository.findByType({
      type: typeEmail,
    });
    if (emailExists.isLeft()) return left(emailExists.value);

    return right({
      user: userExists.value,
      emailTemplate: emailExists.value,
    });
  }
}
