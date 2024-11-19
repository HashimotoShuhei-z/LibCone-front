/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 200;
    /** Serched book */
    resBody: Types.Book;

    reqBody: {
      isbn: string;
    };
  };
}>;
