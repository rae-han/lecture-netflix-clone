import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { itemVariants, MovieItemContainer } from './styles.tsx';
import { Movie } from '../../typings/db.ts';
import { makeImagePath } from '../../utils/makeImagePath.ts';
import { makeImageSrcset } from '../../utils/makeImageSrcset.ts';
import { imageSrcset } from '../../constants/image.ts';
import { makeImageSizes } from '../../utils/makeImageSizes.ts';

interface Props {
  movie: Movie;
}

const MovieItem = ({ movie }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = () => {
    navigate(`?movieId=${movie.id}`);
  };

  makeImageSrcset(movie.poster_path, imageSrcset);

  return (
    <MovieItemContainer onClick={onClick} layoutId={movie.id.toString()} variants={itemVariants}>
      <img
        className="movie-image"
        src={makeImagePath(movie.poster_path)}
        srcSet={makeImageSrcset(movie.poster_path, imageSrcset)}
        sizes={makeImageSizes()}
        alt=""
      />
      <h2 className="movie-title">{movie.title}</h2>
    </MovieItemContainer>
  );
};

export default MovieItem;
