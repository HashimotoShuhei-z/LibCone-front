/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 201;
    /** User sent point */
    resBody: Types.Gift_create_body;
    reqBody: Types.Gift_create_body;
  };
}>;
