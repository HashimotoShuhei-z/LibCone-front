/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  get: {
    status: 200;
    /** Reading-memo is fetched */
    resBody: Types.Reading_memo;
  };

  put: {
    status: 201;
    /** Reading-memo is edited */
    resBody: Types.Reading_memo_update_body;
    reqBody: Types.Reading_memo_update_body;
  };

  delete: {
    status: 204;
  };
}>;
