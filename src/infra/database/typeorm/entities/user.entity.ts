import { Entity, Column } from 'typeorm';

import { UserModel } from '@models/user.model';

import { envConfig } from '@main/config/env.config';

import { BaseEntity } from './_base.entity';

@Entity({ database: envConfig.dataBase.dbDefault.database, name: 'users' })
export class UserEntity extends BaseEntity implements UserModel {
  @Column()
  email: string;

  @Column()
  name: string;
}
