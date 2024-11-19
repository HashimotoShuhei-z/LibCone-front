import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_idoddp } from './_book_id@number/borrow';
import type { Methods as Methods_1012xne } from './_book_id@number/return';
import type { Methods as Methods_1lovcrb } from './scan-serch';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/books';
  const PATH1 = '/borrow';
  const PATH2 = '/return';
  const PATH3 = '/api/books/scan-serch';
  const POST = 'POST';

  return {
    _book_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        borrow: {
          /**
           * @returns User borrowed a book
           */
          post: (option: { body: Methods_idoddp['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_idoddp['post']['resBody'], BasicHeaders, Methods_idoddp['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * @returns User borrowed a book
           */
          $post: (option: { body: Methods_idoddp['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_idoddp['post']['resBody'], BasicHeaders, Methods_idoddp['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        return: {
          /**
           * @returns User borrowed a book
           */
          post: (option: { body: Methods_1012xne['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1012xne['post']['resBody'], BasicHeaders, Methods_1012xne['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json(),
          /**
           * @returns User borrowed a book
           */
          $post: (option: { body: Methods_1012xne['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1012xne['post']['resBody'], BasicHeaders, Methods_1012xne['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
      };
    },
    scan_serch: {
      /**
       * @returns Serched book
       */
      post: (option: { body: Methods_1lovcrb['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1lovcrb['post']['resBody'], BasicHeaders, Methods_1lovcrb['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * @returns Serched book
       */
      $post: (option: { body: Methods_1lovcrb['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1lovcrb['post']['resBody'], BasicHeaders, Methods_1lovcrb['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
