import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_6hksoe } from './_review_id@number';
import type { Methods as Methods_1oz2gr4 } from './_review_id@number/reaction';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/book-reviews';
  const PATH1 = '/reaction';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _review_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        reaction: {
          /**
           * @returns User reacted to the review
           */
          post: (option: { body: Methods_1oz2gr4['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1oz2gr4['post']['resBody'], BasicHeaders, Methods_1oz2gr4['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * @returns User reacted to the review
           */
          $post: (option: { body: Methods_1oz2gr4['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1oz2gr4['post']['resBody'], BasicHeaders, Methods_1oz2gr4['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        /**
         * @returns Book-review is fetched
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_6hksoe['get']['resBody'], BasicHeaders, Methods_6hksoe['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns Book-review is fetched
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_6hksoe['get']['resBody'], BasicHeaders, Methods_6hksoe['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * @returns User edited the review
         */
        put: (option: { body: Methods_6hksoe['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_6hksoe['put']['resBody'], BasicHeaders, Methods_6hksoe['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * @returns User edited the review
         */
        $put: (option: { body: Methods_6hksoe['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_6hksoe['put']['resBody'], BasicHeaders, Methods_6hksoe['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_6hksoe['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_6hksoe['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * @returns Book-reviews are fetched
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns Book-reviews are fetched
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * @returns User posted a review
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @returns User posted a review
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
