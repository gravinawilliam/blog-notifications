import { Entity, Column } from 'typeorm';

import { EmailTemplateModel } from '@models/email-template.model';

import { BaseEntity } from './_base.entity';

@Entity('email_templates')
export class EmailTemplateEntity extends BaseEntity implements EmailTemplateModel {
  @Column()
  type: string;

  @Column()
  subject: string;

  @Column()
  fromName: string;

  @Column()
  fromEmail: string;

  @Column()
  fileName: string;
}
