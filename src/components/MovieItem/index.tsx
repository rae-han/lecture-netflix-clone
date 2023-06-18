import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { itemVariants, MovieItemContainer } from './styles.tsx';
import { Movie } from '../../typings/db.ts';
import { makeImagePath } from '../../utils/makeImagePath.ts';
import { makeImageSrcset } from '../../utils/makeImageSrcset.ts';
import { imageSrcset } from '../../constants/image.ts';
import { makeImageSizes } from '../../utils/makeImageSizes.ts';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.tsx';

interface Props {
  movie: Movie;
}

const MovieItem = ({ movie }: Props) => {
  const navigate = useNavigate();
  const [imgRef, src, srcSet] = useIntersectionObserver(movie);

  const onClick = () => {
    navigate(`?movieId=${movie.id}`, {
      state: {
        ...movie,
      },
    });
  };

  return (
    <MovieItemContainer onClick={onClick} layoutId={movie.id.toString()} variants={itemVariants}>
      <img
        className="movie-image"
        ref={imgRef}
        // src={makeImagePath(movie.poster_path)}
        // srcSet={makeImageSrcset(movie.poster_path, imageSrcset)}
        src={src}
        srcSet={srcSet}
        data-src={makeImagePath(movie.poster_path)}
        data-src-set={makeImageSrcset(movie.poster_path, imageSrcset)}
        sizes={makeImageSizes()}
        alt=""
      />
      <h2 className="movie-title">{movie.title}</h2>
    </MovieItemContainer>
  );
};

export default MovieItem;
