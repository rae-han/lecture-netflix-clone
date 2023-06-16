import React from 'react';
import { useParams } from 'react-router-dom';

import { listVariants, MovieListContainer } from './styles.tsx';
import { useMovies } from '../../hooks/queries/movie.ts';
import MovieItem from '../MovieItem';
import Splash from '../Splash';

const MovieList = () => {
  const { type = 'popular' } = useParams();
  const { data, isLoading } = useMovies(type);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <MovieListContainer variants={listVariants} initial="hidden" animate="visible">
      {data?.results.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </MovieListContainer>
  );
};

export default MovieList;
