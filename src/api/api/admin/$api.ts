import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_18qb60 } from './book-requests';
import type { Methods as Methods_6c4ur4 } from './book-reviews/_review_id@number';
import type { Methods as Methods_1htioyo } from './internal-books';
import type { Methods as Methods_1qcj05e } from './internal-books/_book_id@number';
import type { Methods as Methods_1w7iio7 } from './lending-logs';
import type { Methods as Methods_rcpp34 } from './lending-logs/_log_id@number';
import type { Methods as Methods_yp8eup } from './purchase';
import type { Methods as Methods_1pbnd9f } from './register';
import type { Methods as Methods_1xhiioa } from './users';
import type { Methods as Methods_8ls8pm } from './users/_user_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/admin/book-requests';
  const PATH1 = '/api/admin/book-reviews';
  const PATH2 = '/api/admin/internal-books';
  const PATH3 = '/api/admin/lending-logs';
  const PATH4 = '/api/admin/purchase';
  const PATH5 = '/api/admin/register';
  const PATH6 = '/api/admin/users';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    book_requests: {
      /**
       * @returns Book-requests are fetched
       */
      get: (option?: { query?: Methods_18qb60['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_18qb60['get']['resBody'], BasicHeaders, Methods_18qb60['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * @returns Book-requests are fetched
       */
      $get: (option?: { query?: Methods_18qb60['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_18qb60['get']['resBody'], BasicHeaders, Methods_18qb60['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_18qb60['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    book_reviews: {
      _review_id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_6c4ur4['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_6c4ur4['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    internal_books: {
      _book_id: (val1: number) => {
        const prefix1 = `${PATH2}/${val1}`;

        return {
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
       * @returns Book is created
       */
      post: (option: { body: Methods_1htioyo['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1htioyo['post']['resBody'], BasicHeaders, Methods_1htioyo['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * @returns Book is created
       */
      $post: (option: { body: Methods_1htioyo['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1htioyo['post']['resBody'], BasicHeaders, Methods_1htioyo['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    lending_logs: {
      _log_id: (val1: number) => {
        const prefix1 = `${PATH3}/${val1}`;

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
        fetch<Methods_1w7iio7['get']['resBody'], BasicHeaders, Methods_1w7iio7['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * @returns Lending-logs are fetched
       */
      $get: (option?: { query?: Methods_1w7iio7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1w7iio7['get']['resBody'], BasicHeaders, Methods_1w7iio7['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      /**
       * @returns Lending-log is created
       */
      post: (option: { body: Methods_1w7iio7['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1w7iio7['post']['resBody'], BasicHeaders, Methods_1w7iio7['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * @returns Lending-log is created
       */
      $post: (option: { body: Methods_1w7iio7['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1w7iio7['post']['resBody'], BasicHeaders, Methods_1w7iio7['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1w7iio7['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    purchase: {
      /**
       * @returns Admin purcahsed the books
       */
      post: (option: { body: Methods_yp8eup['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_yp8eup['post']['resBody'], BasicHeaders, Methods_yp8eup['post']['status']>(prefix, PATH4, POST, option).json(),
      /**
       * @returns Admin purcahsed the books
       */
      $post: (option: { body: Methods_yp8eup['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_yp8eup['post']['resBody'], BasicHeaders, Methods_yp8eup['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    register: {
      /**
       * @returns Admin registered
       */
      post: (option: { body: Methods_1pbnd9f['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pbnd9f['post']['resBody'], BasicHeaders, Methods_1pbnd9f['post']['status']>(prefix, PATH5, POST, option).json(),
      /**
       * @returns Admin registered
       */
      $post: (option: { body: Methods_1pbnd9f['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pbnd9f['post']['resBody'], BasicHeaders, Methods_1pbnd9f['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH5}`,
    },
    users: {
      _user_id: (val1: number) => {
        const prefix1 = `${PATH6}/${val1}`;

        return {
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
      /**
       * @returns Users are fetched
       */
      get: (option?: { query?: Methods_1xhiioa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * @returns Users are fetched
       */
      $get: (option?: { query?: Methods_1xhiioa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xhiioa['get']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
