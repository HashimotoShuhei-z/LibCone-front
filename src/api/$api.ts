import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1m9zx7f } from './api/admin/book-requests';
import type { Methods as Methods_j7k7b5 } from './api/admin/book-reviews/_review_id@number';
import type { Methods as Methods_1ujehnx } from './api/admin/internal-books';
import type { Methods as Methods_huler3 } from './api/admin/internal-books/_book_id@number';
import type { Methods as Methods_gvpj7a } from './api/admin/lending-logs';
import type { Methods as Methods_text93 } from './api/admin/lending-logs/_log_id@number';
import type { Methods as Methods_7dnqw } from './api/admin/purchase';
import type { Methods as Methods_1ctxhje } from './api/admin/register';
import type { Methods as Methods_1mrz7ut } from './api/admin/users';
import type { Methods as Methods_17f1cuh } from './api/admin/users/_user_id@number';
import type { Methods as Methods_11otkqa } from './api/book-reviews';
import type { Methods as Methods_1amq66t } from './api/book-reviews/_review_id@number';
import type { Methods as Methods_1n3ybpf } from './api/external-books';
import type { Methods as Methods_1c9fcpl } from './api/internal-books';
import type { Methods as Methods_1aoprwb } from './api/internal-books/_book_id@number';
import type { Methods as Methods_zy1cq8 } from './api/login';
import type { Methods as Methods_15ld6mt } from './api/logout';
import type { Methods as Methods_161muqw } from './api/user/_user_id@number/reading-log';
import type { Methods as Methods_17bt7kx } from './api/user/book-requests';
import type { Methods as Methods_1em22ok } from './api/user/book-reviews';
import type { Methods as Methods_f5gabv } from './api/user/book-reviews/_review_id@number';
import type { Methods as Methods_1mr4xj } from './api/user/book-reviews/_review_id@number/reaction';
import type { Methods as Methods_e6j9id } from './api/user/books/_book_id@number/borrow';
import type { Methods as Methods_g225ki } from './api/user/books/_book_id@number/return';
import type { Methods as Methods_1s5nmf } from './api/user/gift';
import type { Methods as Methods_bzjyb } from './api/user/gift-request';
import type { Methods as Methods_7haxl7 } from './api/user/gift-request/_request_id@string';
import type { Methods as Methods_s248wp } from './api/user/my-page';
import type { Methods as Methods_ttoulk } from './api/user/register';

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
    api: {
      admin: {
        book_requests: {
          /**
           * @returns Book-requests are fetched
           */
          get: (option?: { query?: Methods_1m9zx7f['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1m9zx7f['get']['resBody'], BasicHeaders, Methods_1m9zx7f['get']['status']>(prefix, PATH0, GET, option).json(),
          /**
           * @returns Book-requests are fetched
           */
          $get: (option?: { query?: Methods_1m9zx7f['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1m9zx7f['get']['resBody'], BasicHeaders, Methods_1m9zx7f['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1m9zx7f['get']['query'] } | undefined) =>
            `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        book_reviews: {
          _review_id: (val3: number) => {
            const prefix3 = `${PATH1}/${val3}`;

            return {
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_j7k7b5['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_j7k7b5['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
        },
        internal_books: {
          _book_id: (val3: number) => {
            const prefix3 = `${PATH2}/${val3}`;

            return {
              /**
               * @returns Book is edited
               */
              put: (option: { body: Methods_huler3['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_huler3['put']['resBody'], BasicHeaders, Methods_huler3['put']['status']>(prefix, prefix3, PUT, option).json(),
              /**
               * @returns Book is edited
               */
              $put: (option: { body: Methods_huler3['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_huler3['put']['resBody'], BasicHeaders, Methods_huler3['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_huler3['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_huler3['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns Book is created
           */
          post: (option: { body: Methods_1ujehnx['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1ujehnx['post']['resBody'], BasicHeaders, Methods_1ujehnx['post']['status']>(prefix, PATH2, POST, option).json(),
          /**
           * @returns Book is created
           */
          $post: (option: { body: Methods_1ujehnx['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1ujehnx['post']['resBody'], BasicHeaders, Methods_1ujehnx['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH2}`,
        },
        lending_logs: {
          _log_id: (val3: number) => {
            const prefix3 = `${PATH3}/${val3}`;

            return {
              /**
               * @returns Lending-log is edited
               */
              put: (option: { body: Methods_text93['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_text93['put']['resBody'], BasicHeaders, Methods_text93['put']['status']>(prefix, prefix3, PUT, option).json(),
              /**
               * @returns Lending-log is edited
               */
              $put: (option: { body: Methods_text93['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_text93['put']['resBody'], BasicHeaders, Methods_text93['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_text93['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_text93['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns Lending-logs are fetched
           */
          get: (option?: { query?: Methods_gvpj7a['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_gvpj7a['get']['resBody'], BasicHeaders, Methods_gvpj7a['get']['status']>(prefix, PATH3, GET, option).json(),
          /**
           * @returns Lending-logs are fetched
           */
          $get: (option?: { query?: Methods_gvpj7a['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_gvpj7a['get']['resBody'], BasicHeaders, Methods_gvpj7a['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
          /**
           * @returns Lending-log is created
           */
          post: (option: { body: Methods_gvpj7a['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_gvpj7a['post']['resBody'], BasicHeaders, Methods_gvpj7a['post']['status']>(prefix, PATH3, POST, option).json(),
          /**
           * @returns Lending-log is created
           */
          $post: (option: { body: Methods_gvpj7a['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_gvpj7a['post']['resBody'], BasicHeaders, Methods_gvpj7a['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_gvpj7a['get']['query'] } | undefined) =>
            `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        purchase: {
          /**
           * @returns Admin purcahsed the books
           */
          post: (option: { body: Methods_7dnqw['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_7dnqw['post']['resBody'], BasicHeaders, Methods_7dnqw['post']['status']>(prefix, PATH4, POST, option).json(),
          /**
           * @returns Admin purcahsed the books
           */
          $post: (option: { body: Methods_7dnqw['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_7dnqw['post']['resBody'], BasicHeaders, Methods_7dnqw['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH4}`,
        },
        register: {
          /**
           * @returns Admin registered
           */
          post: (option: { body: Methods_1ctxhje['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1ctxhje['post']['resBody'], BasicHeaders, Methods_1ctxhje['post']['status']>(prefix, PATH5, POST, option).json(),
          /**
           * @returns Admin registered
           */
          $post: (option: { body: Methods_1ctxhje['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1ctxhje['post']['resBody'], BasicHeaders, Methods_1ctxhje['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH5}`,
        },
        users: {
          _user_id: (val3: number) => {
            const prefix3 = `${PATH6}/${val3}`;

            return {
              /**
               * @returns User is fetched
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_17f1cuh['get']['resBody'], BasicHeaders, Methods_17f1cuh['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * @returns User is fetched
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_17f1cuh['get']['resBody'], BasicHeaders, Methods_17f1cuh['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              /**
               * @returns User is edited
               */
              put: (option: { body: Methods_17f1cuh['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_17f1cuh['put']['resBody'], BasicHeaders, Methods_17f1cuh['put']['status']>(prefix, prefix3, PUT, option).json(),
              /**
               * @returns User is edited
               */
              $put: (option: { body: Methods_17f1cuh['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_17f1cuh['put']['resBody'], BasicHeaders, Methods_17f1cuh['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns Users are fetched
           */
          get: (option?: { query?: Methods_1mrz7ut['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1mrz7ut['get']['resBody'], BasicHeaders, Methods_1mrz7ut['get']['status']>(prefix, PATH6, GET, option).json(),
          /**
           * @returns Users are fetched
           */
          $get: (option?: { query?: Methods_1mrz7ut['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1mrz7ut['get']['resBody'], BasicHeaders, Methods_1mrz7ut['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1mrz7ut['get']['query'] } | undefined) =>
            `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      book_reviews: {
        _review_id: (val2: number) => {
          const prefix2 = `${PATH7}/${val2}`;

          return {
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
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Book-reviews are fetched
         */
        get: (option?: { query?: Methods_11otkqa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_11otkqa['get']['resBody'], BasicHeaders, Methods_11otkqa['get']['status']>(prefix, PATH7, GET, option).json(),
        /**
         * @returns Book-reviews are fetched
         */
        $get: (option?: { query?: Methods_11otkqa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_11otkqa['get']['resBody'], BasicHeaders, Methods_11otkqa['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_11otkqa['get']['query'] } | undefined) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      external_books: {
        /**
         * @returns Internal-books are fetched
         */
        get: (option?: { query?: Methods_1n3ybpf['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1n3ybpf['get']['resBody'], BasicHeaders, Methods_1n3ybpf['get']['status']>(prefix, PATH8, GET, option).json(),
        /**
         * @returns Internal-books are fetched
         */
        $get: (option?: { query?: Methods_1n3ybpf['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1n3ybpf['get']['resBody'], BasicHeaders, Methods_1n3ybpf['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1n3ybpf['get']['query'] } | undefined) =>
          `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      internal_books: {
        _book_id: (val2: number) => {
          const prefix2 = `${PATH9}/${val2}`;

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
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Internal-books are fetched
         */
        get: (option?: { query?: Methods_1c9fcpl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1c9fcpl['get']['resBody'], BasicHeaders, Methods_1c9fcpl['get']['status']>(prefix, PATH9, GET, option).json(),
        /**
         * @returns Internal-books are fetched
         */
        $get: (option?: { query?: Methods_1c9fcpl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1c9fcpl['get']['resBody'], BasicHeaders, Methods_1c9fcpl['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1c9fcpl['get']['query'] } | undefined) =>
          `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      login: {
        /**
         * @returns User logged in
         */
        post: (option: { body: Methods_zy1cq8['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_zy1cq8['post']['resBody'], BasicHeaders, Methods_zy1cq8['post']['status']>(prefix, PATH10, POST, option).json(),
        /**
         * @returns User logged in
         */
        $post: (option: { body: Methods_zy1cq8['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_zy1cq8['post']['resBody'], BasicHeaders, Methods_zy1cq8['post']['status']>(prefix, PATH10, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH10}`,
      },
      logout: {
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_15ld6mt['post']['status']>(prefix, PATH11, POST, option).send(),
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_15ld6mt['post']['status']>(prefix, PATH11, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH11}`,
      },
      user: {
        _user_id: (val2: number) => {
          const prefix2 = `${PATH12}/${val2}`;

          return {
            reading_log: {
              /**
               * @returns Reading-log is fetched
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_161muqw['get']['resBody'], BasicHeaders, Methods_161muqw['get']['status']>(prefix, `${prefix2}${PATH13}`, GET, option).json(),
              /**
               * @returns Reading-log is fetched
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_161muqw['get']['resBody'], BasicHeaders, Methods_161muqw['get']['status']>(prefix, `${prefix2}${PATH13}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH13}`,
            },
          };
        },
        book_requests: {
          /**
           * @returns User reacted to the review
           */
          post: (option: { body: Methods_17bt7kx['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_17bt7kx['post']['resBody'], BasicHeaders, Methods_17bt7kx['post']['status']>(prefix, PATH14, POST, option).json(),
          /**
           * @returns User reacted to the review
           */
          $post: (option: { body: Methods_17bt7kx['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_17bt7kx['post']['resBody'], BasicHeaders, Methods_17bt7kx['post']['status']>(prefix, PATH14, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH14}`,
        },
        book_reviews: {
          _review_id: (val3: number) => {
            const prefix3 = `${PATH15}/${val3}`;

            return {
              reaction: {
                /**
                 * @returns User reacted to the review
                 */
                post: (option: { body: Methods_1mr4xj['post']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_1mr4xj['post']['resBody'], BasicHeaders, Methods_1mr4xj['post']['status']>(prefix, `${prefix3}${PATH16}`, POST, option).json(),
                /**
                 * @returns User reacted to the review
                 */
                $post: (option: { body: Methods_1mr4xj['post']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_1mr4xj['post']['resBody'], BasicHeaders, Methods_1mr4xj['post']['status']>(prefix, `${prefix3}${PATH16}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH16}`,
              },
              /**
               * @returns User edited the review
               */
              put: (option: { body: Methods_f5gabv['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_f5gabv['put']['resBody'], BasicHeaders, Methods_f5gabv['put']['status']>(prefix, prefix3, PUT, option).json(),
              /**
               * @returns User edited the review
               */
              $put: (option: { body: Methods_f5gabv['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_f5gabv['put']['resBody'], BasicHeaders, Methods_f5gabv['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns User posted a review
           */
          post: (option: { body: Methods_1em22ok['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1em22ok['post']['resBody'], BasicHeaders, Methods_1em22ok['post']['status']>(prefix, PATH15, POST, option).json(),
          /**
           * @returns User posted a review
           */
          $post: (option: { body: Methods_1em22ok['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1em22ok['post']['resBody'], BasicHeaders, Methods_1em22ok['post']['status']>(prefix, PATH15, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH15}`,
        },
        books: {
          _book_id: (val3: number) => {
            const prefix3 = `${PATH17}/${val3}`;

            return {
              borrow: {
                /**
                 * @returns User borrowed a book
                 */
                post: (option: { body: Methods_e6j9id['post']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_e6j9id['post']['resBody'], BasicHeaders, Methods_e6j9id['post']['status']>(prefix, `${prefix3}${PATH18}`, POST, option).json(),
                /**
                 * @returns User borrowed a book
                 */
                $post: (option: { body: Methods_e6j9id['post']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_e6j9id['post']['resBody'], BasicHeaders, Methods_e6j9id['post']['status']>(prefix, `${prefix3}${PATH18}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH18}`,
              },
              return: {
                /**
                 * @returns User borrowed a book
                 */
                post: (option: { body: Methods_g225ki['post']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_g225ki['post']['resBody'], BasicHeaders, Methods_g225ki['post']['status']>(prefix, `${prefix3}${PATH19}`, POST, option).json(),
                /**
                 * @returns User borrowed a book
                 */
                $post: (option: { body: Methods_g225ki['post']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods_g225ki['post']['resBody'], BasicHeaders, Methods_g225ki['post']['status']>(prefix, `${prefix3}${PATH19}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH19}`,
              },
            };
          },
        },
        gift: {
          /**
           * @returns User sent point
           */
          post: (option: { body: Methods_1s5nmf['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1s5nmf['post']['resBody'], BasicHeaders, Methods_1s5nmf['post']['status']>(prefix, PATH20, POST, option).json(),
          /**
           * @returns User sent point
           */
          $post: (option: { body: Methods_1s5nmf['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1s5nmf['post']['resBody'], BasicHeaders, Methods_1s5nmf['post']['status']>(prefix, PATH20, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH20}`,
        },
        gift_request: {
          _request_id: (val3: string) => {
            const prefix3 = `${PATH21}/${val3}`;

            return {
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_7haxl7['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_7haxl7['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns Gift-requests are fetched
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_bzjyb['get']['resBody'], BasicHeaders, Methods_bzjyb['get']['status']>(prefix, PATH21, GET, option).json(),
          /**
           * @returns Gift-requests are fetched
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_bzjyb['get']['resBody'], BasicHeaders, Methods_bzjyb['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
          /**
           * @returns User requested point
           */
          post: (option: { body: Methods_bzjyb['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_bzjyb['post']['resBody'], BasicHeaders, Methods_bzjyb['post']['status']>(prefix, PATH21, POST, option).json(),
          /**
           * @returns User requested point
           */
          $post: (option: { body: Methods_bzjyb['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_bzjyb['post']['resBody'], BasicHeaders, Methods_bzjyb['post']['status']>(prefix, PATH21, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH21}`,
        },
        my_page: {
          /**
           * @returns Mypage data is fetched
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_s248wp['get']['resBody'], BasicHeaders, Methods_s248wp['get']['status']>(prefix, PATH22, GET, option).json(),
          /**
           * @returns Mypage data is fetched
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_s248wp['get']['resBody'], BasicHeaders, Methods_s248wp['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH22}`,
        },
        register: {
          /**
           * @returns User registered
           */
          post: (option: { body: Methods_ttoulk['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ttoulk['post']['resBody'], BasicHeaders, Methods_ttoulk['post']['status']>(prefix, PATH23, POST, option).json(),
          /**
           * @returns User registered
           */
          $post: (option: { body: Methods_ttoulk['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ttoulk['post']['resBody'], BasicHeaders, Methods_ttoulk['post']['status']>(prefix, PATH23, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH23}`,
        },
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
