import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_11vgfpx } from './_user_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/admin/users';
  const GET = 'GET';
  const PUT = 'PUT';

  return {
    _user_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * @returns User is fetched
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_11vgfpx['get']['resBody'], BasicHeaders, Methods_11vgfpx['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns User is fetched
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_11vgfpx['get']['resBody'], BasicHeaders, Methods_11vgfpx['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * @returns User is edited
         */
        put: (option: { body: Methods_11vgfpx['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_11vgfpx['put']['resBody'], BasicHeaders, Methods_11vgfpx['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * @returns User is edited
         */
        $put: (option: { body: Methods_11vgfpx['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_11vgfpx['put']['resBody'], BasicHeaders, Methods_11vgfpx['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * @returns Users are fetched
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns Users are fetched
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
