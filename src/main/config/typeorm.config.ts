import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { envConfig } from './env.config';

const {
  application: { nodeEnv },
  dataBase: { dbDefault, dbSecondary },
} = envConfig;

const dir = nodeEnv === 'PROD' ? 'dist' : 'dist/src';

const paths = {
  entities: [
    `./${dir}/infra/database/typeorm/entities/**/*.js`,
    `./${dir}/infra/database/typeorm/entities/*.js`,
  ],
  migrations: [`./${dir}/infra/database/typeorm/migrations/*.js`],
  migrationsDir: `./${dir}/infra/database/typeorm/migrations/`,
};

const typeormConfigDefault: ConnectionOptions = {
  name: dbDefault.name,
  type: dbDefault.type as any,
  host: dbDefault.host,
  port: dbDefault.port,
  username: dbDefault.username,
  password: dbDefault.password,
  database: dbDefault.database,
  entities: paths.entities,
  migrations: paths.migrations,
  synchronize: false,
  cli: {
    migrationsDir: paths.migrationsDir,
  },
  namingStrategy: new SnakeNamingStrategy(),
};

export const typeormConfigSecondary: ConnectionOptions = {
  name: dbSecondary.name,
  type: dbSecondary.type as any,
  url: `mongodb://${dbSecondary.username}:${dbSecondary.password}@${dbSecondary.host}:${dbSecondary.port}/${dbSecondary.database}`,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: 'admin',
  entities: [`./${dir}/infra/database/typeorm/schemas/*.js`],
  namingStrategy: new SnakeNamingStrategy(),
};

export default typeormConfigDefault;
