import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_6hksoe } from './_review_id@number';
import type { Methods as Methods_1oz2gr4 } from './_review_id@number/reaction';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/user/book-reviews';
  const PATH1 = '/reaction';
  const POST = 'POST';
  const PUT = 'PUT';

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
         * @returns User edited the review
         */
        put: (option: { body: Methods_6hksoe['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_6hksoe['put']['resBody'], BasicHeaders, Methods_6hksoe['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * @returns User edited the review
         */
        $put: (option: { body: Methods_6hksoe['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_6hksoe['put']['resBody'], BasicHeaders, Methods_6hksoe['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
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
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
