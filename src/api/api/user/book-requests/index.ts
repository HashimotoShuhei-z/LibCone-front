/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 201;
    /** User reacted to the review */
    resBody: Types.Purchase_request_body;
    reqBody: Types.Purchase_request_body;
  };
}>;
