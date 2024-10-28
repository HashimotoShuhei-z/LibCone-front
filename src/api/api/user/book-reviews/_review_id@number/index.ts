/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../../@types';

export type Methods = DefineMethods<{
  put: {
    status: 201;
    /** User edited the review */
    resBody: Types.Review_create_body;
    reqBody: Types.Review_create_body;
  };
}>;
