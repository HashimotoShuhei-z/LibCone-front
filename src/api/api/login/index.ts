/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  post: {
    status: 200;
    /** User logged in */
    resBody: Types.Auth_token_response;
    reqBody: Types.Login_request_body;
  };
}>;
