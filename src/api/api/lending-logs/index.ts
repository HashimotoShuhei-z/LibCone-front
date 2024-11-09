/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  get: {
    query?: {
      /** 書籍名での部分検索 */
      book_name?: string | undefined;
      /** 社員名での部分検索 */
      user_name?: string | undefined;
    } | undefined;

    status: 200;
    /** Lending-logs are fetched */
    resBody: Types.Lending_log[];
  };

  post: {
    status: 201;
    /** Lending-log is created */
    resBody: Types.Lending_log_create_body;
    reqBody: Types.Lending_log_create_body;
  };
}>;
