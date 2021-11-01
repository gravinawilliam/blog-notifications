import { getRepository, Repository } from 'typeorm';

import { IFindEmailTemplatesByTypeRepository } from '@domain/repositories/email-templates/find-email-templates-by-type.repository';

import { FindEmailTemplatesByTypeRepositoryDTO } from '@dtos/_shared/repositories/email-templates/email-templates-repository.dto';

import { left, right } from '@shared/utils/either';

import { EmailTemplateEntity } from '../entities/email-template.entity';

export default class EmailTemplatesTypeormRepository
  implements IFindEmailTemplatesByTypeRepository
{
  private ormRepository: Repository<EmailTemplateEntity>;

  constructor() {
    this.ormRepository = getRepository(EmailTemplateEntity, 'default');
  }

  public async findByType({
    type,
  }: FindEmailTemplatesByTypeRepositoryDTO.Params): Promise<FindEmailTemplatesByTypeRepositoryDTO.Result> {
    const found = await this.ormRepository.findOne({
      where: {
        type,
      },
    });
    if (found === undefined) return left(undefined);
    return right(found);
  }
}
