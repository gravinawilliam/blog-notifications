import { RequiredFieldsValidatorDTO } from '@dtos/_shared/validators/required-fields-validator.dto';

export interface IRequiredFieldsValidator {
  verify(
    params: RequiredFieldsValidatorDTO.Params,
  ): RequiredFieldsValidatorDTO.Result;
}
