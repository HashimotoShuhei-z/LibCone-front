/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  get: {
    status: 200;
    /** Mypage data is fetched */
    resBody: Types.Mypage;
  };
}>;
