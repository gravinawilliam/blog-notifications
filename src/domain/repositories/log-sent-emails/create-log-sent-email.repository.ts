import { CreateLogSentEmailRepositoryDTO } from '@dtos/_shared/repositories/log-sent-emails/log-sent-emails-repository.dto';

export interface ICreateLogSentEmailRepository {
  create(
    params: CreateLogSentEmailRepositoryDTO.Params,
  ): Promise<CreateLogSentEmailRepositoryDTO.Result>;
}
