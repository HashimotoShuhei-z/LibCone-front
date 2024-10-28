import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_19ckdtd } from './_user_id@number/reading-log';
import type { Methods as Methods_18qb60 } from './book-requests';
import type { Methods as Methods_1g8zwjr } from './book-reviews';
import type { Methods as Methods_6c4ur4 } from './book-reviews/_review_id@number';
import type { Methods as Methods_1hxzk1u } from './book-reviews/_review_id@number/reaction';
import type { Methods as Methods_11xfy6u } from './books/_book_id@number/borrow';
import type { Methods as Methods_16lqkp5 } from './books/_book_id@number/return';
import type { Methods as Methods_1943no0 } from './gift';
import type { Methods as Methods_hr7rx4 } from './gift-request';
import type { Methods as Methods_1b2ua3y } from './gift-request/_request_id@string';
import type { Methods as Methods_1npxrj4 } from './my-page';
import type { Methods as Methods_1pbnd9f } from './register';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/user';
  const PATH1 = '/reading-log';
  const PATH2 = '/api/user/book-requests';
  const PATH3 = '/api/user/book-reviews';
  const PATH4 = '/reaction';
  const PATH5 = '/api/user/books';
  const PATH6 = '/borrow';
  const PATH7 = '/return';
  const PATH8 = '/api/user/gift';
  const PATH9 = '/api/user/gift-request';
  const PATH10 = '/api/user/my-page';
  const PATH11 = '/api/user/register';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _user_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        reading_log: {
          /**
           * @returns Reading-log is fetched
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_19ckdtd['get']['resBody'], BasicHeaders, Methods_19ckdtd['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * @returns Reading-log is fetched
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_19ckdtd['get']['resBody'], BasicHeaders, Methods_19ckdtd['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
      };
    },
    book_requests: {
      /**
       * @returns User reacted to the review
       */
      post: (option: { body: Methods_18qb60['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_18qb60['post']['resBody'], BasicHeaders, Methods_18qb60['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * @returns User reacted to the review
       */
      $post: (option: { body: Methods_18qb60['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_18qb60['post']['resBody'], BasicHeaders, Methods_18qb60['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
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
           * @returns User edited the review
           */
          put: (option: { body: Methods_6c4ur4['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_6c4ur4['put']['resBody'], BasicHeaders, Methods_6c4ur4['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * @returns User edited the review
           */
          $put: (option: { body: Methods_6c4ur4['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_6c4ur4['put']['resBody'], BasicHeaders, Methods_6c4ur4['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
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
      $path: () => `${prefix}${PATH3}`,
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
    },
    gift: {
      /**
       * @returns User sent point
       */
      post: (option: { body: Methods_1943no0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1943no0['post']['resBody'], BasicHeaders, Methods_1943no0['post']['status']>(prefix, PATH8, POST, option).json(),
      /**
       * @returns User sent point
       */
      $post: (option: { body: Methods_1943no0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1943no0['post']['resBody'], BasicHeaders, Methods_1943no0['post']['status']>(prefix, PATH8, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH8}`,
    },
    gift_request: {
      _request_id: (val1: string) => {
        const prefix1 = `${PATH9}/${val1}`;

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
        fetch<Methods_hr7rx4['get']['resBody'], BasicHeaders, Methods_hr7rx4['get']['status']>(prefix, PATH9, GET, option).json(),
      /**
       * @returns Gift-requests are fetched
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_hr7rx4['get']['resBody'], BasicHeaders, Methods_hr7rx4['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
      /**
       * @returns User requested point
       */
      post: (option: { body: Methods_hr7rx4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_hr7rx4['post']['resBody'], BasicHeaders, Methods_hr7rx4['post']['status']>(prefix, PATH9, POST, option).json(),
      /**
       * @returns User requested point
       */
      $post: (option: { body: Methods_hr7rx4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_hr7rx4['post']['resBody'], BasicHeaders, Methods_hr7rx4['post']['status']>(prefix, PATH9, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH9}`,
    },
    my_page: {
      /**
       * @returns Mypage data is fetched
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1npxrj4['get']['resBody'], BasicHeaders, Methods_1npxrj4['get']['status']>(prefix, PATH10, GET, option).json(),
      /**
       * @returns Mypage data is fetched
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1npxrj4['get']['resBody'], BasicHeaders, Methods_1npxrj4['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH10}`,
    },
    register: {
      /**
       * @returns User registered
       */
      post: (option: { body: Methods_1pbnd9f['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pbnd9f['post']['resBody'], BasicHeaders, Methods_1pbnd9f['post']['status']>(prefix, PATH11, POST, option).json(),
      /**
       * @returns User registered
       */
      $post: (option: { body: Methods_1pbnd9f['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pbnd9f['post']['resBody'], BasicHeaders, Methods_1pbnd9f['post']['status']>(prefix, PATH11, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH11}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
