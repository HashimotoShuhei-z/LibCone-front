/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  get: {
    status: 200;
    /** User is fetched */
    resBody: Types.Mypage;
  };

  put: {
    status: 201;
    /** User is edited */
    resBody: Types.User_create_body;
    reqBody: Types.User_create_body;
  };
}>;
