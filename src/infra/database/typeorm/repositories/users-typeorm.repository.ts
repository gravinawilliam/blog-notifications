import { getRepository, Repository } from 'typeorm';

import { IFindUserByEmailRepository } from '@domain/repositories/users/find-user-by-email.repository';

import { FindUserByEmailRepositoryDTO } from '@dtos/_shared/repositories/users/users-repository.dto';

import { left, right } from '@shared/utils/either';

import { UserEntity } from '../entities/user.entity';

export default class UsersTypeormRepository
  implements IFindUserByEmailRepository
{
  private ormRepository: Repository<UserEntity>;

  constructor() {
    this.ormRepository = getRepository(UserEntity, 'default');
  }

  public async findByEmail({
    email,
  }: FindUserByEmailRepositoryDTO.Params): Promise<FindUserByEmailRepositoryDTO.Result> {
    const found = await this.ormRepository.findOne({
      where: {
        email,
      },
    });
    if (found === undefined) return left(undefined);
    return right(found);
  }
}
