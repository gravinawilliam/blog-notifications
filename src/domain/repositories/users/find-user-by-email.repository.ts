import { FindUserByEmailRepositoryDTO } from '@dtos/_shared/repositories/users/users-repository.dto';

export interface IFindUserByEmailRepository {
  findByEmail(
    params: FindUserByEmailRepositoryDTO.Params,
  ): Promise<FindUserByEmailRepositoryDTO.Result>;
}
