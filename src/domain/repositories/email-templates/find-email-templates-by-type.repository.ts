import { FindEmailTemplatesByTypeRepositoryDTO } from '@dtos/_shared/repositories/email-templates/email-templates-repository.dto';

export interface IFindEmailTemplatesByTypeRepository {
  findByType(
    params: FindEmailTemplatesByTypeRepositoryDTO.Params,
  ): Promise<FindEmailTemplatesByTypeRepositoryDTO.Result>;
}
