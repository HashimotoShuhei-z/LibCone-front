/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  put: {
    status: 201;
    /** Lending-log is edited */
    resBody: Types.Lending_log_create_body;
    reqBody: Types.Lending_log_create_body;
  };

  delete: {
    status: 204;
  };
}>;
