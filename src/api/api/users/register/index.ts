/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 201;
    /** User registered */
    resBody: Types.Auth_token_response;
    reqBody: Types.User_register_request_body;
  };
}>;
