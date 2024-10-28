/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 201;
    /** Book is created */
    resBody: Types.Book_create_body;
    reqBody: Types.Book_create_body;
  };
}>;
