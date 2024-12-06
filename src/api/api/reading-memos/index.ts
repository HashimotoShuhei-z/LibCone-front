/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  get: {
    status: 200;
    /** Reading-memos are fetched */
    resBody: Types.Reading_memo[];
  };

  post: {
    status: 201;
    /** Reading-memo is created */
    resBody: Types.Reading_memo_create_body;
    reqBody: Types.Reading_memo_create_body;
  };
}>;
