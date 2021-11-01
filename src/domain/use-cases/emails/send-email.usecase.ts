import { SendEmailUseCaseDTO } from '@dtos/emails/send-email.dto';

export interface ISendEmailUseCase {
  execute(params: SendEmailUseCaseDTO.Params): Promise<SendEmailUseCaseDTO.Result>;
}
