import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_qqn4zn } from './_book_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/internal-books';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _book_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * @returns Internal-book is fetched
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_qqn4zn['get']['resBody'], BasicHeaders, Methods_qqn4zn['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns Internal-book is fetched
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_qqn4zn['get']['resBody'], BasicHeaders, Methods_qqn4zn['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * @returns Book is edited
         */
        put: (option: { body: Methods_qqn4zn['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_qqn4zn['put']['resBody'], BasicHeaders, Methods_qqn4zn['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * @returns Book is edited
         */
        $put: (option: { body: Methods_qqn4zn['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_qqn4zn['put']['resBody'], BasicHeaders, Methods_qqn4zn['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_qqn4zn['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_qqn4zn['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * @returns Internal-books are fetched
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns Internal-books are fetched
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * isbnからbooksテーブルに既に存在する書籍なのか確認しつつ、book_companyテーブルにinsert
     * @returns Book is created
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * isbnからbooksテーブルに既に存在する書籍なのか確認しつつ、book_companyテーブルにinsert
     * @returns Book is created
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
