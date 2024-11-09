/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 201;
    /** User borrowed a book */
    resBody: Types.Borrow_request_body;
    reqBody: Types.Borrow_request_body;
  };
}>;
