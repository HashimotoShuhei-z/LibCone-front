/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 201;
    /** User borrowed a book */
    resBody: Types.Return_request_body;
    reqBody: Types.Return_request_body;
  };
}>;
