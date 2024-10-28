/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  get: {
    query?: {
      /** 社員名での部分検索 */
      user_name?: string | undefined;
    } | undefined;

    status: 200;
    /** Users are fetched */
    resBody: Types.Mypage[];
  };
}>;
