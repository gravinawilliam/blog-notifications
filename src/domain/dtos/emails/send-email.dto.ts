import { EmailTemplateModel } from '@models/email-template.model';
import { UserModel } from '@models/user.model';

import { IHttpRequest } from '@shared/interfaces/http-request.interface';
import { IHttpResponse } from '@shared/interfaces/http-response.interface';
import { Either } from '@shared/utils/either';

export namespace SendEmailUseCaseDTO {
  type IVariables = {
    [key: string]: string | number;
  };
  export type Params = {
    user: UserModel;
    emailTemplate: EmailTemplateModel;
    variables: IVariables;
  };
  export type Result = { send: boolean };
}

export namespace SendEmailValidatorDTO {
  export type Params = {
    emailUser: string;
    typeEmail: string;
  };
  type Response = {
    user: UserModel;
    emailTemplate: EmailTemplateModel;
  };
  export type Result = Either<IHttpResponse, Response>;
}

export namespace SendEmailControllerDTO {
  export type Params = IHttpRequest;
  export type Result = IHttpResponse;
}
