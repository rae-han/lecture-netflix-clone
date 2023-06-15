import { useQuery } from '@tanstack/react-query';

import { fetchMoviesAPI } from '../../apis/movie.ts';

export const useMovies = () => useQuery(['movie', 'now_playing'], fetchMoviesAPI);
