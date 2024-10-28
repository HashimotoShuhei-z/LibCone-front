/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  get: {
    status: 200;

    /** Internal-book is fetched */
    resBody: {
      book?: Types.Internal_book | undefined;
      reviews?: Types.Review[] | undefined;
    };
  };
}>;
