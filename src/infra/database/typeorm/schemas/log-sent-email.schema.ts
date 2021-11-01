import {
  Entity,
  Column,
  ObjectIdColumn,
  ObjectID,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

import { EmailTemplateModel } from '@models/email-template.model';
import { LogSentEmailModel } from '@models/log-sent-email.model';
import { UserModel } from '@models/user.model';

@Entity({ name: 'log_sent_emails' })
export class LogSentEmailSchema implements LogSentEmailModel {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  user: UserModel;

  @Column()
  emailTemplate: EmailTemplateModel;

  @Column()
  responseSent: unknown;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
