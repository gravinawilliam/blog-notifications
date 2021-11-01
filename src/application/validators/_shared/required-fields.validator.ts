import { IRequiredFieldsValidator } from '@domain/validators/_shared/required-fields.validator';

import { RequiredFieldsValidatorDTO } from '@dtos/_shared/validators/required-fields-validator.dto';

import { RequiredParamError } from '@shared/errors/required-param.error';
import { left, right } from '@shared/utils/either';
import { badRequest } from '@shared/utils/http-response';

export class RequiredFieldsValidator implements IRequiredFieldsValidator {
  verify({
    fields,
    fieldNames,
  }: RequiredFieldsValidatorDTO.Params): RequiredFieldsValidatorDTO.Result {
    const errors: string[] = [];
    for (let index = 0; index < fields.length; index += 1) {
      if (fields[index] == null) {
        errors.push(fieldNames[index]);
      }
    }

    if (errors.length === 0) return right(null);

    return left(badRequest(new RequiredParamError(errors.join(' '))));
  }
}
