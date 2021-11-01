import { IHttpResponse } from '@shared/interfaces/http-response.interface';
import { Either } from '@shared/utils/either';

export namespace RequiredFieldsValidatorDTO {
  export type Params = {
    fields: any[];
    fieldNames: string[];
  };
  export type Result = Either<IHttpResponse, null>;
}
