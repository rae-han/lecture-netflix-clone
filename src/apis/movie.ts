import { api } from './axios.ts';

export function fetchMoviesAPI() {
  return api.get(`/movie/now_playing`).then((response) => response.data);
}
