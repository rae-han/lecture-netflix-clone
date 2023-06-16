import { useQuery } from '@tanstack/react-query';

import { fetchMoviesAPI, fetchMovieAPI } from '../../apis/movie.ts';
import { MovieDetail, MoviesResponse } from '../../typings/db.ts';

// export const useMovies = () => useQuery(['movie', 'now_playing'], fetchMoviesAPI);
export const useMovies = (type: string) => {
  return useQuery<MoviesResponse>(['movies', type], fetchMoviesAPI, {
    staleTime: 1000 * 60 * 60,
  });
};

export const useMovie = (id: string) => {
  return useQuery<MovieDetail>(['movie', id], () => fetchMovieAPI(id), {
    enabled: !!id,
  });
};
