/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  get: {
    query?: {
      /** 書籍名での部分検索 */
      book_name?: string | undefined;
      /** 書籍カテゴリーでソート */
      book_category_id?: number | undefined;
    } | undefined;

    status: 200;
    /** Internal-books are fetched */
    resBody: Types.External_book[];
  };
}>;
