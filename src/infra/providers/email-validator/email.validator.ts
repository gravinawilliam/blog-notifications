import validator from 'validator';

import { IEmailValidator } from '@domain/validators/_shared/email.validator';

import { EmailValidatorDTO } from '@dtos/_shared/validators/email-validator.dto';

export class EmailValidator implements IEmailValidator {
  isEmailValid({ email }: EmailValidatorDTO.Params): boolean {
    return validator.isEmail(email);
  }
}
