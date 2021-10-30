import { IHttpRequest } from './http-request.interface';
import { IHttpResponse } from './http-response.interface';

export interface IController {
  execute(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}
