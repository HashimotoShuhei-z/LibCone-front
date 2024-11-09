import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1ctxhje } from './api/admin/register';
import type { Methods as Methods_1wsvm8f } from './api/book-purchase-requests';
import type { Methods as Methods_11otkqa } from './api/book-reviews';
import type { Methods as Methods_1amq66t } from './api/book-reviews/_review_id@number';
import type { Methods as Methods_1o9uhv5 } from './api/book-reviews/_review_id@number/reaction';
import type { Methods as Methods_1qcctff } from './api/books/_book_id@number/borrow';
import type { Methods as Methods_154q7xg } from './api/books/_book_id@number/return';
import type { Methods as Methods_1n3ybpf } from './api/external-books';
import type { Methods as Methods_s0wyhp } from './api/gift';
import type { Methods as Methods_1uudg0h } from './api/gift-request';
import type { Methods as Methods_18x8mvl } from './api/gift-request/_request_id@string';
import type { Methods as Methods_1c9fcpl } from './api/internal-books';
import type { Methods as Methods_1aoprwb } from './api/internal-books/_book_id@number';
import type { Methods as Methods_7wg8tu } from './api/lending-logs';
import type { Methods as Methods_1ce8zwj } from './api/lending-logs/_log_id@number';
import type { Methods as Methods_zy1cq8 } from './api/login';
import type { Methods as Methods_15ld6mt } from './api/logout';
import type { Methods as Methods_hamwiv } from './api/my-page';
import type { Methods as Methods_sw1z9w } from './api/purchase';
import type { Methods as Methods_80a9vt } from './api/users';
import type { Methods as Methods_8cxs5p } from './api/users/_user_id@number';
import type { Methods as Methods_16kpjc9 } from './api/users/_user_id@number/reading-log';
import type { Methods as Methods_1qpsavf } from './api/users/register';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/admin/register';
  const PATH1 = '/api/book-purchase-requests';
  const PATH2 = '/api/book-reviews';
  const PATH3 = '/reaction';
  const PATH4 = '/api/books';
  const PATH5 = '/borrow';
  const PATH6 = '/return';
  const PATH7 = '/api/external-books';
  const PATH8 = '/api/gift';
  const PATH9 = '/api/gift-request';
  const PATH10 = '/api/internal-books';
  const PATH11 = '/api/lending-logs';
  const PATH12 = '/api/login';
  const PATH13 = '/api/logout';
  const PATH14 = '/api/my-page';
  const PATH15 = '/api/purchase';
  const PATH16 = '/api/users';
  const PATH17 = '/reading-log';
  const PATH18 = '/api/users/register';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    api: {
      admin: {
        register: {
          /**
           * @returns Admin registered
           */
          post: (option: { body: Methods_1ctxhje['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1ctxhje['post']['resBody'], BasicHeaders, Methods_1ctxhje['post']['status']>(prefix, PATH0, POST, option).json(),
          /**
           * @returns Admin registered
           */
          $post: (option: { body: Methods_1ctxhje['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1ctxhje['post']['resBody'], BasicHeaders, Methods_1ctxhje['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH0}`,
        },
      },
      book_purchase_requests: {
        /**
         * @returns Book-requests are fetched
         */
        get: (option?: { query?: Methods_1wsvm8f['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1wsvm8f['get']['resBody'], BasicHeaders, Methods_1wsvm8f['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * @returns Book-requests are fetched
         */
        $get: (option?: { query?: Methods_1wsvm8f['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1wsvm8f['get']['resBody'], BasicHeaders, Methods_1wsvm8f['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        /**
         * @returns User reacted to the review
         */
        post: (option: { body: Methods_1wsvm8f['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1wsvm8f['post']['resBody'], BasicHeaders, Methods_1wsvm8f['post']['status']>(prefix, PATH1, POST, option).json(),
        /**
         * @returns User reacted to the review
         */
        $post: (option: { body: Methods_1wsvm8f['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1wsvm8f['post']['resBody'], BasicHeaders, Methods_1wsvm8f['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1wsvm8f['get']['query'] } | undefined) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      book_reviews: {
        _review_id: (val2: number) => {
          const prefix2 = `${PATH2}/${val2}`;

          return {
            reaction: {
              /**
               * @returns User reacted to the review
               */
              post: (option: { body: Methods_1o9uhv5['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1o9uhv5['post']['resBody'], BasicHeaders, Methods_1o9uhv5['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option).json(),
              /**
               * @returns User reacted to the review
               */
              $post: (option: { body: Methods_1o9uhv5['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1o9uhv5['post']['resBody'], BasicHeaders, Methods_1o9uhv5['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH3}`,
            },
            /**
             * @returns Book-review is fetched
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1amq66t['get']['resBody'], BasicHeaders, Methods_1amq66t['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * @returns Book-review is fetched
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1amq66t['get']['resBody'], BasicHeaders, Methods_1amq66t['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * @returns User edited the review
             */
            put: (option: { body: Methods_1amq66t['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1amq66t['put']['resBody'], BasicHeaders, Methods_1amq66t['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * @returns User edited the review
             */
            $put: (option: { body: Methods_1amq66t['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1amq66t['put']['resBody'], BasicHeaders, Methods_1amq66t['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1amq66t['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1amq66t['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Book-reviews are fetched
         */
        get: (option?: { query?: Methods_11otkqa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_11otkqa['get']['resBody'], BasicHeaders, Methods_11otkqa['get']['status']>(prefix, PATH2, GET, option).json(),
        /**
         * @returns Book-reviews are fetched
         */
        $get: (option?: { query?: Methods_11otkqa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_11otkqa['get']['resBody'], BasicHeaders, Methods_11otkqa['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        /**
         * @returns User posted a review
         */
        post: (option: { body: Methods_11otkqa['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_11otkqa['post']['resBody'], BasicHeaders, Methods_11otkqa['post']['status']>(prefix, PATH2, POST, option).json(),
        /**
         * @returns User posted a review
         */
        $post: (option: { body: Methods_11otkqa['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_11otkqa['post']['resBody'], BasicHeaders, Methods_11otkqa['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_11otkqa['get']['query'] } | undefined) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      books: {
        _book_id: (val2: number) => {
          const prefix2 = `${PATH4}/${val2}`;

          return {
            borrow: {
              /**
               * @returns User borrowed a book
               */
              post: (option: { body: Methods_1qcctff['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1qcctff['post']['resBody'], BasicHeaders, Methods_1qcctff['post']['status']>(prefix, `${prefix2}${PATH5}`, POST, option).json(),
              /**
               * @returns User borrowed a book
               */
              $post: (option: { body: Methods_1qcctff['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1qcctff['post']['resBody'], BasicHeaders, Methods_1qcctff['post']['status']>(prefix, `${prefix2}${PATH5}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH5}`,
            },
            return: {
              /**
               * @returns User borrowed a book
               */
              post: (option: { body: Methods_154q7xg['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_154q7xg['post']['resBody'], BasicHeaders, Methods_154q7xg['post']['status']>(prefix, `${prefix2}${PATH6}`, POST, option).json(),
              /**
               * @returns User borrowed a book
               */
              $post: (option: { body: Methods_154q7xg['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_154q7xg['post']['resBody'], BasicHeaders, Methods_154q7xg['post']['status']>(prefix, `${prefix2}${PATH6}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH6}`,
            },
          };
        },
      },
      external_books: {
        /**
         * @returns Internal-books are fetched
         */
        get: (option?: { query?: Methods_1n3ybpf['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1n3ybpf['get']['resBody'], BasicHeaders, Methods_1n3ybpf['get']['status']>(prefix, PATH7, GET, option).json(),
        /**
         * @returns Internal-books are fetched
         */
        $get: (option?: { query?: Methods_1n3ybpf['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1n3ybpf['get']['resBody'], BasicHeaders, Methods_1n3ybpf['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1n3ybpf['get']['query'] } | undefined) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      gift: {
        /**
         * @returns User sent point
         */
        post: (option: { body: Methods_s0wyhp['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_s0wyhp['post']['resBody'], BasicHeaders, Methods_s0wyhp['post']['status']>(prefix, PATH8, POST, option).json(),
        /**
         * @returns User sent point
         */
        $post: (option: { body: Methods_s0wyhp['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_s0wyhp['post']['resBody'], BasicHeaders, Methods_s0wyhp['post']['status']>(prefix, PATH8, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH8}`,
      },
      gift_request: {
        _request_id: (val2: string) => {
          const prefix2 = `${PATH9}/${val2}`;

          return {
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_18x8mvl['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_18x8mvl['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Gift-requests are fetched
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1uudg0h['get']['resBody'], BasicHeaders, Methods_1uudg0h['get']['status']>(prefix, PATH9, GET, option).json(),
        /**
         * @returns Gift-requests are fetched
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1uudg0h['get']['resBody'], BasicHeaders, Methods_1uudg0h['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
        /**
         * @returns User requested point
         */
        post: (option: { body: Methods_1uudg0h['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1uudg0h['post']['resBody'], BasicHeaders, Methods_1uudg0h['post']['status']>(prefix, PATH9, POST, option).json(),
        /**
         * @returns User requested point
         */
        $post: (option: { body: Methods_1uudg0h['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1uudg0h['post']['resBody'], BasicHeaders, Methods_1uudg0h['post']['status']>(prefix, PATH9, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH9}`,
      },
      internal_books: {
        _book_id: (val2: number) => {
          const prefix2 = `${PATH10}/${val2}`;

          return {
            /**
             * @returns Internal-book is fetched
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1aoprwb['get']['resBody'], BasicHeaders, Methods_1aoprwb['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * @returns Internal-book is fetched
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1aoprwb['get']['resBody'], BasicHeaders, Methods_1aoprwb['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * @returns Book is edited
             */
            put: (option: { body: Methods_1aoprwb['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1aoprwb['put']['resBody'], BasicHeaders, Methods_1aoprwb['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * @returns Book is edited
             */
            $put: (option: { body: Methods_1aoprwb['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1aoprwb['put']['resBody'], BasicHeaders, Methods_1aoprwb['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1aoprwb['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1aoprwb['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Internal-books are fetched
         */
        get: (option?: { query?: Methods_1c9fcpl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1c9fcpl['get']['resBody'], BasicHeaders, Methods_1c9fcpl['get']['status']>(prefix, PATH10, GET, option).json(),
        /**
         * @returns Internal-books are fetched
         */
        $get: (option?: { query?: Methods_1c9fcpl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1c9fcpl['get']['resBody'], BasicHeaders, Methods_1c9fcpl['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
        /**
         * isbnからbooksテーブルに既に存在する書籍なのか確認しつつ、book_companyテーブルにinsert
         * @returns Book is created
         */
        post: (option: { body: Methods_1c9fcpl['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1c9fcpl['post']['resBody'], BasicHeaders, Methods_1c9fcpl['post']['status']>(prefix, PATH10, POST, option).json(),
        /**
         * isbnからbooksテーブルに既に存在する書籍なのか確認しつつ、book_companyテーブルにinsert
         * @returns Book is created
         */
        $post: (option: { body: Methods_1c9fcpl['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1c9fcpl['post']['resBody'], BasicHeaders, Methods_1c9fcpl['post']['status']>(prefix, PATH10, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1c9fcpl['get']['query'] } | undefined) =>
          `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      lending_logs: {
        _log_id: (val2: number) => {
          const prefix2 = `${PATH11}/${val2}`;

          return {
            /**
             * @returns Lending-log is edited
             */
            put: (option: { body: Methods_1ce8zwj['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1ce8zwj['put']['resBody'], BasicHeaders, Methods_1ce8zwj['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * @returns Lending-log is edited
             */
            $put: (option: { body: Methods_1ce8zwj['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1ce8zwj['put']['resBody'], BasicHeaders, Methods_1ce8zwj['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1ce8zwj['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1ce8zwj['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Lending-logs are fetched
         */
        get: (option?: { query?: Methods_7wg8tu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_7wg8tu['get']['resBody'], BasicHeaders, Methods_7wg8tu['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * @returns Lending-logs are fetched
         */
        $get: (option?: { query?: Methods_7wg8tu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_7wg8tu['get']['resBody'], BasicHeaders, Methods_7wg8tu['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        /**
         * @returns Lending-log is created
         */
        post: (option: { body: Methods_7wg8tu['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_7wg8tu['post']['resBody'], BasicHeaders, Methods_7wg8tu['post']['status']>(prefix, PATH11, POST, option).json(),
        /**
         * @returns Lending-log is created
         */
        $post: (option: { body: Methods_7wg8tu['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_7wg8tu['post']['resBody'], BasicHeaders, Methods_7wg8tu['post']['status']>(prefix, PATH11, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_7wg8tu['get']['query'] } | undefined) =>
          `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      login: {
        /**
         * @returns User logged in
         */
        post: (option: { body: Methods_zy1cq8['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_zy1cq8['post']['resBody'], BasicHeaders, Methods_zy1cq8['post']['status']>(prefix, PATH12, POST, option).json(),
        /**
         * @returns User logged in
         */
        $post: (option: { body: Methods_zy1cq8['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_zy1cq8['post']['resBody'], BasicHeaders, Methods_zy1cq8['post']['status']>(prefix, PATH12, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH12}`,
      },
      logout: {
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_15ld6mt['post']['status']>(prefix, PATH13, POST, option).send(),
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_15ld6mt['post']['status']>(prefix, PATH13, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH13}`,
      },
      my_page: {
        /**
         * @returns Mypage data is fetched
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_hamwiv['get']['resBody'], BasicHeaders, Methods_hamwiv['get']['status']>(prefix, PATH14, GET, option).json(),
        /**
         * @returns Mypage data is fetched
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_hamwiv['get']['resBody'], BasicHeaders, Methods_hamwiv['get']['status']>(prefix, PATH14, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH14}`,
      },
      purchase: {
        /**
         * @returns Admin purcahsed the books
         */
        post: (option: { body: Methods_sw1z9w['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_sw1z9w['post']['resBody'], BasicHeaders, Methods_sw1z9w['post']['status']>(prefix, PATH15, POST, option).json(),
        /**
         * @returns Admin purcahsed the books
         */
        $post: (option: { body: Methods_sw1z9w['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_sw1z9w['post']['resBody'], BasicHeaders, Methods_sw1z9w['post']['status']>(prefix, PATH15, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH15}`,
      },
      users: {
        _user_id: (val2: number) => {
          const prefix2 = `${PATH16}/${val2}`;

          return {
            reading_log: {
              /**
               * @returns Reading-log is fetched
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_16kpjc9['get']['resBody'], BasicHeaders, Methods_16kpjc9['get']['status']>(prefix, `${prefix2}${PATH17}`, GET, option).json(),
              /**
               * @returns Reading-log is fetched
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_16kpjc9['get']['resBody'], BasicHeaders, Methods_16kpjc9['get']['status']>(prefix, `${prefix2}${PATH17}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH17}`,
            },
            /**
             * @returns User is fetched
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_8cxs5p['get']['resBody'], BasicHeaders, Methods_8cxs5p['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * @returns User is fetched
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_8cxs5p['get']['resBody'], BasicHeaders, Methods_8cxs5p['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * @returns User is edited
             */
            put: (option: { body: Methods_8cxs5p['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_8cxs5p['put']['resBody'], BasicHeaders, Methods_8cxs5p['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * @returns User is edited
             */
            $put: (option: { body: Methods_8cxs5p['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_8cxs5p['put']['resBody'], BasicHeaders, Methods_8cxs5p['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        register: {
          /**
           * @returns User registered
           */
          post: (option: { body: Methods_1qpsavf['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1qpsavf['post']['resBody'], BasicHeaders, Methods_1qpsavf['post']['status']>(prefix, PATH18, POST, option).json(),
          /**
           * @returns User registered
           */
          $post: (option: { body: Methods_1qpsavf['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1qpsavf['post']['resBody'], BasicHeaders, Methods_1qpsavf['post']['status']>(prefix, PATH18, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH18}`,
        },
        /**
         * @returns Users are fetched
         */
        get: (option?: { query?: Methods_80a9vt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_80a9vt['get']['resBody'], BasicHeaders, Methods_80a9vt['get']['status']>(prefix, PATH16, GET, option).json(),
        /**
         * @returns Users are fetched
         */
        $get: (option?: { query?: Methods_80a9vt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_80a9vt['get']['resBody'], BasicHeaders, Methods_80a9vt['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_80a9vt['get']['query'] } | undefined) =>
          `${prefix}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
