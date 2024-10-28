/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 201;
    /** Admin registered */
    resBody: Types.Auth_token_response;
    reqBody: Types.Admin_register_request_body;
  };
}>;
