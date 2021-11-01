import { UserModel } from '@models/user.model';

import { Either } from '@shared/utils/either';

export namespace FindUserByEmailRepositoryDTO {
  export type Params = {
    email: string;
  };
  export type Result = Either<undefined, UserModel>;
}
