/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  get: {
    status: 200;
    /** Book-review is fetched */
    resBody: Types.Review_with_book;
  };

  put: {
    status: 201;
    /** User edited the review */
    resBody: Types.Review_create_body;
    reqBody: Types.Review_create_body;
  };

  delete: {
    status: 204;
  };
}>;
