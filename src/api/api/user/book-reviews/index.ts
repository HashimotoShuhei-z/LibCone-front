/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 201;
    /** User posted a review */
    resBody: Types.Review_create_body;
    reqBody: Types.Review_create_body;
  };
}>;
