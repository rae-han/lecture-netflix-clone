import { useQuery } from '@tanstack/react-query';

import { fetchMoviesAPI } from '../../apis/movie.ts';
import { MoviesResult } from '../../typings/db.ts';

export const useMovies = () => useQuery<MoviesResult>(['movie', 'now_playing'], fetchMoviesAPI);
