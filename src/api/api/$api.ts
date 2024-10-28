import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1rkbpcw } from './admin/book-requests';
import type { Methods as Methods_1veq3mg } from './admin/book-reviews/_review_id@number';
import type { Methods as Methods_z37v60 } from './admin/internal-books';
import type { Methods as Methods_5kneey } from './admin/internal-books/_book_id@number';
import type { Methods as Methods_1ksy6bj } from './admin/lending-logs';
import type { Methods as Methods_14s9eso } from './admin/lending-logs/_log_id@number';
import type { Methods as Methods_1azqpzd } from './admin/purchase';
import type { Methods as Methods_1au484b } from './admin/register';
import type { Methods as Methods_13zngaq } from './admin/users';
import type { Methods as Methods_1py17zm } from './admin/users/_user_id@number';
import type { Methods as Methods_1g8zwjr } from './book-reviews';
import type { Methods as Methods_6c4ur4 } from './book-reviews/_review_id@number';
import type { Methods as Methods_f5rhpa } from './external-books';
import type { Methods as Methods_1htioyo } from './internal-books';
import type { Methods as Methods_1qcj05e } from './internal-books/_book_id@number';
import type { Methods as Methods_idk8rz } from './login';
import type { Methods as Methods_1rpsris } from './logout';
import type { Methods as Methods_157mgg5 } from './user/_user_id@number/reading-log';
import type { Methods as Methods_17lr3o } from './user/book-requests';
import type { Methods as Methods_q10lfv } from './user/book-reviews';
import type { Methods as Methods_ldte78 } from './user/book-reviews/_review_id@number';
import type { Methods as Methods_1nze1jq } from './user/book-reviews/_review_id@number/reaction';
import type { Methods as Methods_1psc9de } from './user/books/_book_id@number/borrow';
import type { Methods as Methods_61d331 } from './user/books/_book_id@number/return';
import type { Methods as Methods_hjo81g } from './user/gift';
import type { Methods as Methods_13magck } from './user/gift-request';
import type { Methods as Methods_bpazsq } from './user/gift-request/_request_id@string';
import type { Methods as Methods_1vk1d9g } from './user/my-page';
import type { Methods as Methods_jq300v } from './user/register';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/admin/book-requests';
  const PATH1 = '/api/admin/book-reviews';
  const PATH2 = '/api/admin/internal-books';
  const PATH3 = '/api/admin/lending-logs';
  const PATH4 = '/api/admin/purchase';
  const PATH5 = '/api/admin/register';
  const PATH6 = '/api/admin/users';
  const PATH7 = '/api/book-reviews';
  const PATH8 = '/api/external-books';
  const PATH9 = '/api/internal-books';
  const PATH10 = '/api/login';
  const PATH11 = '/api/logout';
  const PATH12 = '/api/user';
  const PATH13 = '/reading-log';
  const PATH14 = '/api/user/book-requests';
  const PATH15 = '/api/user/book-reviews';
  const PATH16 = '/reaction';
  const PATH17 = '/api/user/books';
  const PATH18 = '/borrow';
  const PATH19 = '/return';
  const PATH20 = '/api/user/gift';
  const PATH21 = '/api/user/gift-request';
  const PATH22 = '/api/user/my-page';
  const PATH23 = '/api/user/register';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    admin: {
      book_requests: {
        /**
         * @returns Book-requests are fetched
         */
        get: (option?: { query?: Methods_1rkbpcw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1rkbpcw['get']['resBody'], BasicHeaders, Methods_1rkbpcw['get']['status']>(prefix, PATH0, GET, option).json(),
        /**
         * @returns Book-requests are fetched
         */
        $get: (option?: { query?: Methods_1rkbpcw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1rkbpcw['get']['resBody'], BasicHeaders, Methods_1rkbpcw['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1rkbpcw['get']['query'] } | undefined) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      book_reviews: {
        _review_id: (val2: number) => {
          const prefix2 = `${PATH1}/${val2}`;

          return {
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1veq3mg['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1veq3mg['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
      internal_books: {
        _book_id: (val2: number) => {
          const prefix2 = `${PATH2}/${val2}`;

          return {
            /**
             * @returns Book is edited
             */
            put: (option: { body: Methods_5kneey['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_5kneey['put']['resBody'], BasicHeaders, Methods_5kneey['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * @returns Book is edited
             */
            $put: (option: { body: Methods_5kneey['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_5kneey['put']['resBody'], BasicHeaders, Methods_5kneey['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_5kneey['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_5kneey['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Book is created
         */
        post: (option: { body: Methods_z37v60['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_z37v60['post']['resBody'], BasicHeaders, Methods_z37v60['post']['status']>(prefix, PATH2, POST, option).json(),
        /**
         * @returns Book is created
         */
        $post: (option: { body: Methods_z37v60['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_z37v60['post']['resBody'], BasicHeaders, Methods_z37v60['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`,
      },
      lending_logs: {
        _log_id: (val2: number) => {
          const prefix2 = `${PATH3}/${val2}`;

          return {
            /**
             * @returns Lending-log is edited
             */
            put: (option: { body: Methods_14s9eso['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_14s9eso['put']['resBody'], BasicHeaders, Methods_14s9eso['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * @returns Lending-log is edited
             */
            $put: (option: { body: Methods_14s9eso['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_14s9eso['put']['resBody'], BasicHeaders, Methods_14s9eso['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_14s9eso['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_14s9eso['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Lending-logs are fetched
         */
        get: (option?: { query?: Methods_1ksy6bj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1ksy6bj['get']['resBody'], BasicHeaders, Methods_1ksy6bj['get']['status']>(prefix, PATH3, GET, option).json(),
        /**
         * @returns Lending-logs are fetched
         */
        $get: (option?: { query?: Methods_1ksy6bj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1ksy6bj['get']['resBody'], BasicHeaders, Methods_1ksy6bj['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
        /**
         * @returns Lending-log is created
         */
        post: (option: { body: Methods_1ksy6bj['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1ksy6bj['post']['resBody'], BasicHeaders, Methods_1ksy6bj['post']['status']>(prefix, PATH3, POST, option).json(),
        /**
         * @returns Lending-log is created
         */
        $post: (option: { body: Methods_1ksy6bj['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1ksy6bj['post']['resBody'], BasicHeaders, Methods_1ksy6bj['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1ksy6bj['get']['query'] } | undefined) =>
          `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      purchase: {
        /**
         * @returns Admin purcahsed the books
         */
        post: (option: { body: Methods_1azqpzd['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1azqpzd['post']['resBody'], BasicHeaders, Methods_1azqpzd['post']['status']>(prefix, PATH4, POST, option).json(),
        /**
         * @returns Admin purcahsed the books
         */
        $post: (option: { body: Methods_1azqpzd['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1azqpzd['post']['resBody'], BasicHeaders, Methods_1azqpzd['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`,
      },
      register: {
        /**
         * @returns Admin registered
         */
        post: (option: { body: Methods_1au484b['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1au484b['post']['resBody'], BasicHeaders, Methods_1au484b['post']['status']>(prefix, PATH5, POST, option).json(),
        /**
         * @returns Admin registered
         */
        $post: (option: { body: Methods_1au484b['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1au484b['post']['resBody'], BasicHeaders, Methods_1au484b['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH5}`,
      },
      users: {
        _user_id: (val2: number) => {
          const prefix2 = `${PATH6}/${val2}`;

          return {
            /**
             * @returns User is fetched
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1py17zm['get']['resBody'], BasicHeaders, Methods_1py17zm['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * @returns User is fetched
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1py17zm['get']['resBody'], BasicHeaders, Methods_1py17zm['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * @returns User is edited
             */
            put: (option: { body: Methods_1py17zm['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1py17zm['put']['resBody'], BasicHeaders, Methods_1py17zm['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * @returns User is edited
             */
            $put: (option: { body: Methods_1py17zm['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1py17zm['put']['resBody'], BasicHeaders, Methods_1py17zm['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Users are fetched
         */
        get: (option?: { query?: Methods_13zngaq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_13zngaq['get']['resBody'], BasicHeaders, Methods_13zngaq['get']['status']>(prefix, PATH6, GET, option).json(),
        /**
         * @returns Users are fetched
         */
        $get: (option?: { query?: Methods_13zngaq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_13zngaq['get']['resBody'], BasicHeaders, Methods_13zngaq['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_13zngaq['get']['query'] } | undefined) =>
          `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    book_reviews: {
      _review_id: (val1: number) => {
        const prefix1 = `${PATH7}/${val1}`;

        return {
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
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns Book-reviews are fetched
       */
      get: (option?: { query?: Methods_1g8zwjr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1g8zwjr['get']['resBody'], BasicHeaders, Methods_1g8zwjr['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * @returns Book-reviews are fetched
       */
      $get: (option?: { query?: Methods_1g8zwjr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1g8zwjr['get']['resBody'], BasicHeaders, Methods_1g8zwjr['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1g8zwjr['get']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    external_books: {
      /**
       * @returns Internal-books are fetched
       */
      get: (option?: { query?: Methods_f5rhpa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_f5rhpa['get']['resBody'], BasicHeaders, Methods_f5rhpa['get']['status']>(prefix, PATH8, GET, option).json(),
      /**
       * @returns Internal-books are fetched
       */
      $get: (option?: { query?: Methods_f5rhpa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_f5rhpa['get']['resBody'], BasicHeaders, Methods_f5rhpa['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_f5rhpa['get']['query'] } | undefined) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    internal_books: {
      _book_id: (val1: number) => {
        const prefix1 = `${PATH9}/${val1}`;

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
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns Internal-books are fetched
       */
      get: (option?: { query?: Methods_1htioyo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1htioyo['get']['resBody'], BasicHeaders, Methods_1htioyo['get']['status']>(prefix, PATH9, GET, option).json(),
      /**
       * @returns Internal-books are fetched
       */
      $get: (option?: { query?: Methods_1htioyo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1htioyo['get']['resBody'], BasicHeaders, Methods_1htioyo['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1htioyo['get']['query'] } | undefined) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    login: {
      /**
       * @returns User logged in
       */
      post: (option: { body: Methods_idk8rz['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_idk8rz['post']['resBody'], BasicHeaders, Methods_idk8rz['post']['status']>(prefix, PATH10, POST, option).json(),
      /**
       * @returns User logged in
       */
      $post: (option: { body: Methods_idk8rz['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_idk8rz['post']['resBody'], BasicHeaders, Methods_idk8rz['post']['status']>(prefix, PATH10, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH10}`,
    },
    logout: {
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1rpsris['post']['status']>(prefix, PATH11, POST, option).send(),
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1rpsris['post']['status']>(prefix, PATH11, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH11}`,
    },
    user: {
      _user_id: (val1: number) => {
        const prefix1 = `${PATH12}/${val1}`;

        return {
          reading_log: {
            /**
             * @returns Reading-log is fetched
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_157mgg5['get']['resBody'], BasicHeaders, Methods_157mgg5['get']['status']>(prefix, `${prefix1}${PATH13}`, GET, option).json(),
            /**
             * @returns Reading-log is fetched
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_157mgg5['get']['resBody'], BasicHeaders, Methods_157mgg5['get']['status']>(prefix, `${prefix1}${PATH13}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH13}`,
          },
        };
      },
      book_requests: {
        /**
         * @returns User reacted to the review
         */
        post: (option: { body: Methods_17lr3o['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_17lr3o['post']['resBody'], BasicHeaders, Methods_17lr3o['post']['status']>(prefix, PATH14, POST, option).json(),
        /**
         * @returns User reacted to the review
         */
        $post: (option: { body: Methods_17lr3o['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_17lr3o['post']['resBody'], BasicHeaders, Methods_17lr3o['post']['status']>(prefix, PATH14, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH14}`,
      },
      book_reviews: {
        _review_id: (val2: number) => {
          const prefix2 = `${PATH15}/${val2}`;

          return {
            reaction: {
              /**
               * @returns User reacted to the review
               */
              post: (option: { body: Methods_1nze1jq['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1nze1jq['post']['resBody'], BasicHeaders, Methods_1nze1jq['post']['status']>(prefix, `${prefix2}${PATH16}`, POST, option).json(),
              /**
               * @returns User reacted to the review
               */
              $post: (option: { body: Methods_1nze1jq['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1nze1jq['post']['resBody'], BasicHeaders, Methods_1nze1jq['post']['status']>(prefix, `${prefix2}${PATH16}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH16}`,
            },
            /**
             * @returns User edited the review
             */
            put: (option: { body: Methods_ldte78['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_ldte78['put']['resBody'], BasicHeaders, Methods_ldte78['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * @returns User edited the review
             */
            $put: (option: { body: Methods_ldte78['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_ldte78['put']['resBody'], BasicHeaders, Methods_ldte78['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns User posted a review
         */
        post: (option: { body: Methods_q10lfv['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_q10lfv['post']['resBody'], BasicHeaders, Methods_q10lfv['post']['status']>(prefix, PATH15, POST, option).json(),
        /**
         * @returns User posted a review
         */
        $post: (option: { body: Methods_q10lfv['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_q10lfv['post']['resBody'], BasicHeaders, Methods_q10lfv['post']['status']>(prefix, PATH15, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH15}`,
      },
      books: {
        _book_id: (val2: number) => {
          const prefix2 = `${PATH17}/${val2}`;

          return {
            borrow: {
              /**
               * @returns User borrowed a book
               */
              post: (option: { body: Methods_1psc9de['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1psc9de['post']['resBody'], BasicHeaders, Methods_1psc9de['post']['status']>(prefix, `${prefix2}${PATH18}`, POST, option).json(),
              /**
               * @returns User borrowed a book
               */
              $post: (option: { body: Methods_1psc9de['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1psc9de['post']['resBody'], BasicHeaders, Methods_1psc9de['post']['status']>(prefix, `${prefix2}${PATH18}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH18}`,
            },
            return: {
              /**
               * @returns User borrowed a book
               */
              post: (option: { body: Methods_61d331['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_61d331['post']['resBody'], BasicHeaders, Methods_61d331['post']['status']>(prefix, `${prefix2}${PATH19}`, POST, option).json(),
              /**
               * @returns User borrowed a book
               */
              $post: (option: { body: Methods_61d331['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_61d331['post']['resBody'], BasicHeaders, Methods_61d331['post']['status']>(prefix, `${prefix2}${PATH19}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH19}`,
            },
          };
        },
      },
      gift: {
        /**
         * @returns User sent point
         */
        post: (option: { body: Methods_hjo81g['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_hjo81g['post']['resBody'], BasicHeaders, Methods_hjo81g['post']['status']>(prefix, PATH20, POST, option).json(),
        /**
         * @returns User sent point
         */
        $post: (option: { body: Methods_hjo81g['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_hjo81g['post']['resBody'], BasicHeaders, Methods_hjo81g['post']['status']>(prefix, PATH20, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH20}`,
      },
      gift_request: {
        _request_id: (val2: string) => {
          const prefix2 = `${PATH21}/${val2}`;

          return {
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_bpazsq['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_bpazsq['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Gift-requests are fetched
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_13magck['get']['resBody'], BasicHeaders, Methods_13magck['get']['status']>(prefix, PATH21, GET, option).json(),
        /**
         * @returns Gift-requests are fetched
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_13magck['get']['resBody'], BasicHeaders, Methods_13magck['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
        /**
         * @returns User requested point
         */
        post: (option: { body: Methods_13magck['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_13magck['post']['resBody'], BasicHeaders, Methods_13magck['post']['status']>(prefix, PATH21, POST, option).json(),
        /**
         * @returns User requested point
         */
        $post: (option: { body: Methods_13magck['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_13magck['post']['resBody'], BasicHeaders, Methods_13magck['post']['status']>(prefix, PATH21, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH21}`,
      },
      my_page: {
        /**
         * @returns Mypage data is fetched
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1vk1d9g['get']['resBody'], BasicHeaders, Methods_1vk1d9g['get']['status']>(prefix, PATH22, GET, option).json(),
        /**
         * @returns Mypage data is fetched
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1vk1d9g['get']['resBody'], BasicHeaders, Methods_1vk1d9g['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH22}`,
      },
      register: {
        /**
         * @returns User registered
         */
        post: (option: { body: Methods_jq300v['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_jq300v['post']['resBody'], BasicHeaders, Methods_jq300v['post']['status']>(prefix, PATH23, POST, option).json(),
        /**
         * @returns User registered
         */
        $post: (option: { body: Methods_jq300v['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_jq300v['post']['resBody'], BasicHeaders, Methods_jq300v['post']['status']>(prefix, PATH23, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH23}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
