import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_6hksoe } from './_review_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/admin/book-reviews';
  const DELETE = 'DELETE';

  return {
    _review_id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_6hksoe['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_6hksoe['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
