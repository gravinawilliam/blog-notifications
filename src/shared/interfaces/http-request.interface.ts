type IHeaders = {
  [key: string]: unknown;
};

export type IHttpRequest = {
  body?: any;
  params?: unknown;
  headers?: IHeaders;
};
