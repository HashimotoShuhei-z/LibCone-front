/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  get: {
    status: 200;
    /** Reading-memos are fetched */
    resBody: Types.Lending_log[];
  };

  post: {
    status: 201;
    /** Reading-memo is created */
    resBody: Types.Lending_log_create_body;
    reqBody: Types.Lending_log_create_body;
  };
}>;
