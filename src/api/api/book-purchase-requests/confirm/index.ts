/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 200;
    /** Purchase requests confirmed */
    resBody: Types.Confirm_purchase_request;
    reqBody: Types.Confirm_purchase_request;
  };
}>;
