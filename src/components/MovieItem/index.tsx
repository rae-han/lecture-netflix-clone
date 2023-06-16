import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { itemVariants, MovieItemContainer } from './styles.tsx';
import { Movie } from '../../typings/db.ts';
import { makeImagePath } from '../../utils/makeImagePath.ts';

interface Props {
  movie: Movie;
}

const MovieItem = ({ movie }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queries = new URLSearchParams(location.search);

  const onClick = () => {
    navigate(`?movieId=${movie.id}`);
  };

  return (
    <MovieItemContainer onClick={onClick} layoutId={movie.id.toString()} variants={itemVariants}>
      <img className="movie-image" src={makeImagePath(movie.poster_path)} alt="" />
      <h2 className="movie-title">{movie.title}</h2>
    </MovieItemContainer>
  );
};

export default MovieItem;
