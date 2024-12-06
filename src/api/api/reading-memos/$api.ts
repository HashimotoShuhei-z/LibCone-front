import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1vemxqg } from './_memo_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/reading-memos';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _memo_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * @returns Reading-memo is fetched
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1vemxqg['get']['resBody'], BasicHeaders, Methods_1vemxqg['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns Reading-memo is fetched
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1vemxqg['get']['resBody'], BasicHeaders, Methods_1vemxqg['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * @returns Reading-memo is edited
         */
        put: (option: { body: Methods_1vemxqg['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1vemxqg['put']['resBody'], BasicHeaders, Methods_1vemxqg['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * @returns Reading-memo is edited
         */
        $put: (option: { body: Methods_1vemxqg['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1vemxqg['put']['resBody'], BasicHeaders, Methods_1vemxqg['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1vemxqg['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1vemxqg['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * @returns Reading-memos are fetched
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns Reading-memos are fetched
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * @returns Reading-memo is created
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @returns Reading-memo is created
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
