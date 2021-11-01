import { EmailTemplateModel } from '@models/email-template.model';

import { Either } from '@shared/utils/either';

export namespace FindEmailTemplatesByTypeRepositoryDTO {
  export type Params = {
    type: string;
  };
  export type Result = Either<undefined, EmailTemplateModel>;
}
