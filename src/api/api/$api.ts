import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1au484b } from './admin/register';
import type { Methods as Methods_mm79za } from './book-purchase-requests';
import type { Methods as Methods_qqjg0t } from './book-purchase-requests/confirm';
import type { Methods as Methods_1g8zwjr } from './book-reviews';
import type { Methods as Methods_6c4ur4 } from './book-reviews/_review_id@number';
import type { Methods as Methods_1hxzk1u } from './book-reviews/_review_id@number/reaction';
import type { Methods as Methods_11xfy6u } from './books/_book_id@number/borrow';
import type { Methods as Methods_16lqkp5 } from './books/_book_id@number/return';
import type { Methods as Methods_18hc8n0 } from './books/scan-serch';
import type { Methods as Methods_f5rhpa } from './external-books';
import type { Methods as Methods_1943no0 } from './gift';
import type { Methods as Methods_hr7rx4 } from './gift-request';
import type { Methods as Methods_1b2ua3y } from './gift-request/_request_id@string';
import type { Methods as Methods_1htioyo } from './internal-books';
import type { Methods as Methods_1qcj05e } from './internal-books/_book_id@number';
import type { Methods as Methods_1w7iio7 } from './lending-logs';
import type { Methods as Methods_rcpp34 } from './lending-logs/_log_id@number';
import type { Methods as Methods_idk8rz } from './login';
import type { Methods as Methods_1rpsris } from './logout';
import type { Methods as Methods_1npxrj4 } from './my-page';
import type { Methods as Methods_yp8eup } from './purchase';
import type { Methods as Methods_fq82ik } from './reading-memos';
import type { Methods as Methods_14x9mh5 } from './reading-memos/_memo_id@number';
import type { Methods as Methods_1xhiioa } from './users';
import type { Methods as Methods_8ls8pm } from './users/_user_id@number';
import type { Methods as Methods_1n5vjoq } from './users/_user_id@number/reading-log';
import type { Methods as Methods_qytqqa } from './users/register';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/admin/register';
  const PATH1 = '/api/book-purchase-requests';
  const PATH2 = '/api/book-purchase-requests/confirm';
  const PATH3 = '/api/book-reviews';
  const PATH4 = '/reaction';
  const PATH5 = '/api/books';
  const PATH6 = '/borrow';
  const PATH7 = '/return';
  const PATH8 = '/api/books/scan-serch';
  const PATH9 = '/api/external-books';
  const PATH10 = '/api/gift';
  const PATH11 = '/api/gift-request';
  const PATH12 = '/api/internal-books';
  const PATH13 = '/api/lending-logs';
  const PATH14 = '/api/login';
  const PATH15 = '/api/logout';
  const PATH16 = '/api/my-page';
  const PATH17 = '/api/purchase';
  const PATH18 = '/api/reading-memos';
  const PATH19 = '/api/users';
  const PATH20 = '/reading-log';
  const PATH21 = '/api/users/register';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    admin: {
      register: {
        /**
         * @returns Admin registered
         */
        post: (option: { body: Methods_1au484b['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1au484b['post']['resBody'], BasicHeaders, Methods_1au484b['post']['status']>(prefix, PATH0, POST, option).json(),
        /**
         * @returns Admin registered
         */
        $post: (option: { body: Methods_1au484b['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1au484b['post']['resBody'], BasicHeaders, Methods_1au484b['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
    },
    book_purchase_requests: {
      confirm: {
        /**
         * @returns Purchase requests confirmed
         */
        post: (option: { body: Methods_qqjg0t['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_qqjg0t['post']['resBody'], BasicHeaders, Methods_qqjg0t['post']['status']>(prefix, PATH2, POST, option).json(),
        /**
         * @returns Purchase requests confirmed
         */
        $post: (option: { body: Methods_qqjg0t['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_qqjg0t['post']['resBody'], BasicHeaders, Methods_qqjg0t['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`,
      },
      /**
       * @returns Book-requests are fetched
       */
      get: (option?: { query?: Methods_mm79za['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_mm79za['get']['resBody'], BasicHeaders, Methods_mm79za['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns Book-requests are fetched
       */
      $get: (option?: { query?: Methods_mm79za['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_mm79za['get']['resBody'], BasicHeaders, Methods_mm79za['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * @returns User reacted to the review
       */
      post: (option: { body: Methods_mm79za['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_mm79za['post']['resBody'], BasicHeaders, Methods_mm79za['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * @returns User reacted to the review
       */
      $post: (option: { body: Methods_mm79za['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_mm79za['post']['resBody'], BasicHeaders, Methods_mm79za['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_mm79za['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    book_reviews: {
      _review_id: (val1: number) => {
        const prefix1 = `${PATH3}/${val1}`;

        return {
          reaction: {
            /**
             * @returns User reacted to the review
             */
            post: (option: { body: Methods_1hxzk1u['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1hxzk1u['post']['resBody'], BasicHeaders, Methods_1hxzk1u['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option).json(),
            /**
             * @returns User reacted to the review
             */
            $post: (option: { body: Methods_1hxzk1u['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1hxzk1u['post']['resBody'], BasicHeaders, Methods_1hxzk1u['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`,
          },
          /**
           * @returns Book-review is fetched
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_6c4ur4['get']['resBody'], BasicHeaders, Methods_6c4ur4['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Book-review is fetched
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_6c4ur4['get']['resBody'], BasicHeaders, Methods_6c4ur4['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns User edited the review
           */
          put: (option: { body: Methods_6c4ur4['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_6c4ur4['put']['resBody'], BasicHeaders, Methods_6c4ur4['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * @returns User edited the review
           */
          $put: (option: { body: Methods_6c4ur4['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_6c4ur4['put']['resBody'], BasicHeaders, Methods_6c4ur4['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_6c4ur4['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_6c4ur4['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns Book-reviews are fetched
       */
      get: (option?: { query?: Methods_1g8zwjr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1g8zwjr['get']['resBody'], BasicHeaders, Methods_1g8zwjr['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * @returns Book-reviews are fetched
       */
      $get: (option?: { query?: Methods_1g8zwjr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1g8zwjr['get']['resBody'], BasicHeaders, Methods_1g8zwjr['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      /**
       * @returns User posted a review
       */
      post: (option: { body: Methods_1g8zwjr['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1g8zwjr['post']['resBody'], BasicHeaders, Methods_1g8zwjr['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * @returns User posted a review
       */
      $post: (option: { body: Methods_1g8zwjr['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1g8zwjr['post']['resBody'], BasicHeaders, Methods_1g8zwjr['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1g8zwjr['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    books: {
      _book_id: (val1: number) => {
        const prefix1 = `${PATH5}/${val1}`;

        return {
          borrow: {
            /**
             * @returns User borrowed a book
             */
            post: (option: { body: Methods_11xfy6u['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_11xfy6u['post']['resBody'], BasicHeaders, Methods_11xfy6u['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option).json(),
            /**
             * @returns User borrowed a book
             */
            $post: (option: { body: Methods_11xfy6u['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_11xfy6u['post']['resBody'], BasicHeaders, Methods_11xfy6u['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH6}`,
          },
          return: {
            /**
             * @returns User borrowed a book
             */
            post: (option: { body: Methods_16lqkp5['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_16lqkp5['post']['resBody'], BasicHeaders, Methods_16lqkp5['post']['status']>(prefix, `${prefix1}${PATH7}`, POST, option).json(),
            /**
             * @returns User borrowed a book
             */
            $post: (option: { body: Methods_16lqkp5['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_16lqkp5['post']['resBody'], BasicHeaders, Methods_16lqkp5['post']['status']>(prefix, `${prefix1}${PATH7}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH7}`,
          },
        };
      },
      scan_serch: {
        /**
         * @returns Serched book
         */
        post: (option: { body: Methods_18hc8n0['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_18hc8n0['post']['resBody'], BasicHeaders, Methods_18hc8n0['post']['status']>(prefix, PATH8, POST, option).json(),
        /**
         * @returns Serched book
         */
        $post: (option: { body: Methods_18hc8n0['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_18hc8n0['post']['resBody'], BasicHeaders, Methods_18hc8n0['post']['status']>(prefix, PATH8, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH8}`,
      },
    },
    external_books: {
      /**
       * @returns Internal-books are fetched
       */
      get: (option?: { query?: Methods_f5rhpa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_f5rhpa['get']['resBody'], BasicHeaders, Methods_f5rhpa['get']['status']>(prefix, PATH9, GET, option).json(),
      /**
       * @returns Internal-books are fetched
       */
      $get: (option?: { query?: Methods_f5rhpa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_f5rhpa['get']['resBody'], BasicHeaders, Methods_f5rhpa['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_f5rhpa['get']['query'] } | undefined) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    gift: {
      /**
       * @returns User sent point
       */
      post: (option: { body: Methods_1943no0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1943no0['post']['resBody'], BasicHeaders, Methods_1943no0['post']['status']>(prefix, PATH10, POST, option).json(),
      /**
       * @returns User sent point
       */
      $post: (option: { body: Methods_1943no0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1943no0['post']['resBody'], BasicHeaders, Methods_1943no0['post']['status']>(prefix, PATH10, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH10}`,
    },
    gift_request: {
      _request_id: (val1: string) => {
        const prefix1 = `${PATH11}/${val1}`;

        return {
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1b2ua3y['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1b2ua3y['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns Gift-requests are fetched
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_hr7rx4['get']['resBody'], BasicHeaders, Methods_hr7rx4['get']['status']>(prefix, PATH11, GET, option).json(),
      /**
       * @returns Gift-requests are fetched
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_hr7rx4['get']['resBody'], BasicHeaders, Methods_hr7rx4['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
      /**
       * @returns User requested point
       */
      post: (option: { body: Methods_hr7rx4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_hr7rx4['post']['resBody'], BasicHeaders, Methods_hr7rx4['post']['status']>(prefix, PATH11, POST, option).json(),
      /**
       * @returns User requested point
       */
      $post: (option: { body: Methods_hr7rx4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_hr7rx4['post']['resBody'], BasicHeaders, Methods_hr7rx4['post']['status']>(prefix, PATH11, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH11}`,
    },
    internal_books: {
      _book_id: (val1: number) => {
        const prefix1 = `${PATH12}/${val1}`;

        return {
          /**
           * @returns Internal-book is fetched
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1qcj05e['get']['resBody'], BasicHeaders, Methods_1qcj05e['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Internal-book is fetched
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1qcj05e['get']['resBody'], BasicHeaders, Methods_1qcj05e['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns Book is edited
           */
          put: (option: { body: Methods_1qcj05e['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1qcj05e['put']['resBody'], BasicHeaders, Methods_1qcj05e['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * @returns Book is edited
           */
          $put: (option: { body: Methods_1qcj05e['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1qcj05e['put']['resBody'], BasicHeaders, Methods_1qcj05e['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1qcj05e['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1qcj05e['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns Internal-books are fetched
       */
      get: (option?: { query?: Methods_1htioyo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1htioyo['get']['resBody'], BasicHeaders, Methods_1htioyo['get']['status']>(prefix, PATH12, GET, option).json(),
      /**
       * @returns Internal-books are fetched
       */
      $get: (option?: { query?: Methods_1htioyo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1htioyo['get']['resBody'], BasicHeaders, Methods_1htioyo['get']['status']>(prefix, PATH12, GET, option).json().then(r => r.body),
      /**
       * isbnからbooksテーブルに既に存在する書籍なのか確認しつつ、book_companyテーブルにinsert
       * @returns Book is created
       */
      post: (option: { body: Methods_1htioyo['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1htioyo['post']['resBody'], BasicHeaders, Methods_1htioyo['post']['status']>(prefix, PATH12, POST, option).json(),
      /**
       * isbnからbooksテーブルに既に存在する書籍なのか確認しつつ、book_companyテーブルにinsert
       * @returns Book is created
       */
      $post: (option: { body: Methods_1htioyo['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1htioyo['post']['resBody'], BasicHeaders, Methods_1htioyo['post']['status']>(prefix, PATH12, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1htioyo['get']['query'] } | undefined) =>
        `${prefix}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    lending_logs: {
      _log_id: (val1: number) => {
        const prefix1 = `${PATH13}/${val1}`;

        return {
          /**
           * @returns Lending-log is edited
           */
          put: (option: { body: Methods_rcpp34['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_rcpp34['put']['resBody'], BasicHeaders, Methods_rcpp34['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * @returns Lending-log is edited
           */
          $put: (option: { body: Methods_rcpp34['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_rcpp34['put']['resBody'], BasicHeaders, Methods_rcpp34['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_rcpp34['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_rcpp34['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns Lending-logs are fetched
       */
      get: (option?: { query?: Methods_1w7iio7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1w7iio7['get']['resBody'], BasicHeaders, Methods_1w7iio7['get']['status']>(prefix, PATH13, GET, option).json(),
      /**
       * @returns Lending-logs are fetched
       */
      $get: (option?: { query?: Methods_1w7iio7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1w7iio7['get']['resBody'], BasicHeaders, Methods_1w7iio7['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
      /**
       * @returns Lending-log is created
       */
      post: (option: { body: Methods_1w7iio7['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1w7iio7['post']['resBody'], BasicHeaders, Methods_1w7iio7['post']['status']>(prefix, PATH13, POST, option).json(),
      /**
       * @returns Lending-log is created
       */
      $post: (option: { body: Methods_1w7iio7['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1w7iio7['post']['resBody'], BasicHeaders, Methods_1w7iio7['post']['status']>(prefix, PATH13, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1w7iio7['get']['query'] } | undefined) =>
        `${prefix}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    login: {
      /**
       * @returns User logged in
       */
      post: (option: { body: Methods_idk8rz['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_idk8rz['post']['resBody'], BasicHeaders, Methods_idk8rz['post']['status']>(prefix, PATH14, POST, option).json(),
      /**
       * @returns User logged in
       */
      $post: (option: { body: Methods_idk8rz['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_idk8rz['post']['resBody'], BasicHeaders, Methods_idk8rz['post']['status']>(prefix, PATH14, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH14}`,
    },
    logout: {
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1rpsris['post']['status']>(prefix, PATH15, POST, option).send(),
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1rpsris['post']['status']>(prefix, PATH15, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH15}`,
    },
    my_page: {
      /**
       * @returns Mypage data is fetched
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1npxrj4['get']['resBody'], BasicHeaders, Methods_1npxrj4['get']['status']>(prefix, PATH16, GET, option).json(),
      /**
       * @returns Mypage data is fetched
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1npxrj4['get']['resBody'], BasicHeaders, Methods_1npxrj4['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH16}`,
    },
    purchase: {
      /**
       * @returns Admin purcahsed the books
       */
      post: (option: { body: Methods_yp8eup['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_yp8eup['post']['resBody'], BasicHeaders, Methods_yp8eup['post']['status']>(prefix, PATH17, POST, option).json(),
      /**
       * @returns Admin purcahsed the books
       */
      $post: (option: { body: Methods_yp8eup['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_yp8eup['post']['resBody'], BasicHeaders, Methods_yp8eup['post']['status']>(prefix, PATH17, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH17}`,
    },
    reading_memos: {
      _memo_id: (val1: number) => {
        const prefix1 = `${PATH18}/${val1}`;

        return {
          /**
           * @returns Reading-memo is fetched
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_14x9mh5['get']['resBody'], BasicHeaders, Methods_14x9mh5['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Reading-memo is fetched
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_14x9mh5['get']['resBody'], BasicHeaders, Methods_14x9mh5['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns Reading-memo is edited
           */
          put: (option: { body: Methods_14x9mh5['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_14x9mh5['put']['resBody'], BasicHeaders, Methods_14x9mh5['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * @returns Reading-memo is edited
           */
          $put: (option: { body: Methods_14x9mh5['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_14x9mh5['put']['resBody'], BasicHeaders, Methods_14x9mh5['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_14x9mh5['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_14x9mh5['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns Reading-memos are fetched
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_fq82ik['get']['resBody'], BasicHeaders, Methods_fq82ik['get']['status']>(prefix, PATH18, GET, option).json(),
      /**
       * @returns Reading-memos are fetched
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_fq82ik['get']['resBody'], BasicHeaders, Methods_fq82ik['get']['status']>(prefix, PATH18, GET, option).json().then(r => r.body),
      /**
       * @returns Reading-memo is created
       */
      post: (option: { body: Methods_fq82ik['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_fq82ik['post']['resBody'], BasicHeaders, Methods_fq82ik['post']['status']>(prefix, PATH18, POST, option).json(),
      /**
       * @returns Reading-memo is created
       */
      $post: (option: { body: Methods_fq82ik['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_fq82ik['post']['resBody'], BasicHeaders, Methods_fq82ik['post']['status']>(prefix, PATH18, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH18}`,
    },
    users: {
      _user_id: (val1: number) => {
        const prefix1 = `${PATH19}/${val1}`;

        return {
          reading_log: {
            /**
             * @returns Reading-log is fetched
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1n5vjoq['get']['resBody'], BasicHeaders, Methods_1n5vjoq['get']['status']>(prefix, `${prefix1}${PATH20}`, GET, option).json(),
            /**
             * @returns Reading-log is fetched
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1n5vjoq['get']['resBody'], BasicHeaders, Methods_1n5vjoq['get']['status']>(prefix, `${prefix1}${PATH20}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH20}`,
          },
          /**
           * @returns User is fetched
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_8ls8pm['get']['resBody'], BasicHeaders, Methods_8ls8pm['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns User is fetched
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_8ls8pm['get']['resBody'], BasicHeaders, Methods_8ls8pm['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns User is edited
           */
          put: (option: { body: Methods_8ls8pm['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_8ls8pm['put']['resBody'], BasicHeaders, Methods_8ls8pm['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * @returns User is edited
           */
          $put: (option: { body: Methods_8ls8pm['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_8ls8pm['put']['resBody'], BasicHeaders, Methods_8ls8pm['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      register: {
        /**
         * @returns User registered
         */
        post: (option: { body: Methods_qytqqa['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_qytqqa['post']['resBody'], BasicHeaders, Methods_qytqqa['post']['status']>(prefix, PATH21, POST, option).json(),
        /**
         * @returns User registered
         */
        $post: (option: { body: Methods_qytqqa['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_qytqqa['post']['resBody'], BasicHeaders, Methods_qytqqa['post']['status']>(prefix, PATH21, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH21}`,
      },
      /**
       * @returns Users are fetched
       */
      get: (option?: { query?: Methods_1xhiioa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH19, GET, option).json(),
      /**
       * @returns Users are fetched
       */
      $get: (option?: { query?: Methods_1xhiioa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xhiioa['get']['query'] } | undefined) =>
        `${prefix}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
