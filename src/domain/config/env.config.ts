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
    environment: string;
  };
  aws: {
    region: string;
  };
  dataBase: {
    dbDefault: {
      name: string;
      type: string;
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
    };
    dbSecondary: {
      name: string;
      type: string;
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
    };
  };
};
