type IHeaders = {
  [key: string]: unknown;
};

export type IHttpRequest = {
  body?: unknown;
  params?: unknown;
  headers?: IHeaders;
};
