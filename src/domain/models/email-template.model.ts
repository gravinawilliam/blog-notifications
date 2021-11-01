import { BaseModel } from '@models/_base.model';

export class EmailTemplateModel extends BaseModel {
  type: string;

  subject: string;

  fromName: string;

  fromEmail: string;

  fileName: string;
}
