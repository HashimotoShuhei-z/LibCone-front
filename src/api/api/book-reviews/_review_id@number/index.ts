/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  get: {
    status: 200;
    /** Book-review is fetched */
    resBody: Types.Review_with_book;
  };
}>;
