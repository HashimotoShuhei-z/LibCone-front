import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_qqn4zn } from './_book_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/internal-books';
  const GET = 'GET';

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
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
