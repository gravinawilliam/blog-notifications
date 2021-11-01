import { IEnvConfig } from '@domain/config/env.config';

export const envConfig = {
  // url: {
  //   internalMicroServices: {
  //   },
  //   externalMicroServices: {
  //   }
  // },
  application: {
    port: parseInt(process.env.BLOG_NOTIFICATIONS_PORT, 10),
    nodeEnv: process.env.NODE_ENV,
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
  aws: {
    region: process.env.AWS_REGION,
  },
  dataBase: {
    dbDefault: {
      name: 'default',
      type: process.env.DB_DEFAULT_BLOG_NOTIFICATIONS_TYPE,
      host: process.env.DB_DEFAULT_BLOG_NOTIFICATIONS_HOST,
      port: parseInt(process.env.DB_DEFAULT_BLOG_NOTIFICATIONS_PORT, 10),
      username: process.env.DB_DEFAULT_BLOG_NOTIFICATIONS_USERNAME,
      password: process.env.DB_DEFAULT_BLOG_NOTIFICATIONS_PASSWORD,
      database: process.env.DB_DEFAULT_BLOG_NOTIFICATIONS_DATABASE,
    },
    dbSecondary: {
      name: 'secondary',
      type: process.env.DB_SECONDARY_BLOG_NOTIFICATIONS_TYPE,
      host: process.env.DB_SECONDARY_BLOG_NOTIFICATIONS_HOST,
      port: parseInt(process.env.DB_SECONDARY_BLOG_NOTIFICATIONS_PORT, 10),
      username: process.env.DB_SECONDARY_BLOG_NOTIFICATIONS_USERNAME,
      password: process.env.DB_SECONDARY_BLOG_NOTIFICATIONS_PASSWORD,
      database: process.env.DB_SECONDARY_BLOG_NOTIFICATIONS_DATABASE,
    },
  },
} as IEnvConfig;
