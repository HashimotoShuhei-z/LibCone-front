/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 201;
    /** Admin purcahsed the books */
    resBody: Types.Purchase_create_body;
    reqBody: Types.Purchase_create_body;
  };
}>;
