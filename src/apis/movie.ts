import { QueryFunctionContext } from '@tanstack/react-query';

import { api } from './axios.ts';

export function fetchMoviesAPI({ queryKey }: QueryFunctionContext) {
  const [_, type] = queryKey;
  return api.get(`/${type}`).then((response) => response.data);
}

export function fetchMovieAPI(id: string) {
  return api.get(`/movie?id=${id}`).then((response) => response.data);
}
