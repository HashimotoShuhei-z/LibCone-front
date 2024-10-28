/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../@types';

export type Methods = DefineMethods<{
  put: {
    status: 201;
    /** Book is edited */
    resBody: Types.Book_create_body;
    reqBody: Types.Book_create_body;
  };

  delete: {
    status: 204;
  };
}>;
