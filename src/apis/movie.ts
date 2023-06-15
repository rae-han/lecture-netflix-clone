import { QueryFunctionContext } from '@tanstack/react-query';

import { api } from './axios.ts';
import { MOVIEDB_API_KEY, MOVIEDB_API_URL } from '../constants/api.ts';

export function fetchMoviesAPI({ queryKey }: QueryFunctionContext) {
  console.log(queryKey);
  return api.get(`/movie/now_playing`).then((response) => response.data);
}
