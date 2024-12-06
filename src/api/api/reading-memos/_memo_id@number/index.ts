/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  get: {
    status: 200;
    /** Reading-memo is fetched */
    resBody: Types.Mypage;
  };

  put: {
    status: 201;
    /** Reading-memo is edited */
    resBody: Types.Lending_log_create_body;
    reqBody: Types.Lending_log_create_body;
  };

  delete: {
    status: 204;
  };
}>;
