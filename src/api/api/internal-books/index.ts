/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  get: {
    query?: {
      /** 書籍名での部分検索 */
      book_name?: string | undefined;
      /** 書籍ジャンルでソート */
      book_genre_id?: number | undefined;
    } | undefined;

    status: 200;
    /** Internal-books are fetched */
    resBody: Types.Internal_book[];
  };

  /** isbnからbooksテーブルに既に存在する書籍なのか確認しつつ、book_companyテーブルにinsert */
  post: {
    status: 201;
    /** Book is created */
    resBody: Types.Book_create_body;
    reqBody: Types.Book_create_body;
  };
}>;
