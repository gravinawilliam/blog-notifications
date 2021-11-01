import { EmailValidatorDTO } from '@dtos/_shared/validators/email-validator.dto';

export interface IEmailValidator {
  isEmailValid(params: EmailValidatorDTO.Params): EmailValidatorDTO.Result;
}
