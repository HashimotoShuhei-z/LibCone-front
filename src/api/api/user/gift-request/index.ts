/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  get: {
    status: 200;
    /** Gift-requests are fetched */
    resBody: Types.GiftRequest[];
  };

  post: {
    status: 201;
    /** User requested point */
    resBody: Types.GiftRequest_create_body;
    reqBody: Types.GiftRequest_create_body;
  };
}>;
