export type IEnvConfig = {
  // url: {
  //   internalMicroServices: {
  //   },
  //   externalMicroServices: {
  //   }
  // },
  application: {
    port: number;
    nodeEnv: 'DEV' | 'PROD' | 'LOCAL';
  };
  sentry: {
    dsn: string;
  };
};
