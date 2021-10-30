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
} as IEnvConfig;
