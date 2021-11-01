import { getMongoRepository, MongoRepository } from 'typeorm';

import { ICreateLogSentEmailRepository } from '@domain/repositories/log-sent-emails/create-log-sent-email.repository';

import { CreateLogSentEmailRepositoryDTO } from '@dtos/_shared/repositories/log-sent-emails/log-sent-emails-repository.dto';

import { LogSentEmailSchema } from '../schemas/log-sent-email.schema';

export default class LogSentEmailsTypeormRepository
  implements ICreateLogSentEmailRepository
{
  private ormRepository: MongoRepository<LogSentEmailSchema>;

  constructor() {
    this.ormRepository = getMongoRepository(LogSentEmailSchema, 'secondary');
  }

  public async create(params: CreateLogSentEmailRepositoryDTO.Params): Promise<void> {
    const created = this.ormRepository.create(params);
    await this.ormRepository.save(created);
  }
}
