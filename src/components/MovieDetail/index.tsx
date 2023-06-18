import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { MovieDetailContainer } from './styles.tsx';
import { useMovie } from '../../hooks/queries/movie.ts';
import { makeImagePath } from '../../utils/makeImagePath.ts';

const MovieDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queries = new URLSearchParams(location.search);
  const movieId = queries.get('movieId') ?? '';
  const { data: movie, isLoading } = useMovie(movieId);
  // console.log({
  //   locationState: location.state,
  // });
  // console.log(location?.state?.poster_path);
  const [src, setSrc] = useState(() => makeImagePath(location?.state?.poster_path));

  const onClick: MouseEventHandler = (e) => {
    if (e.currentTarget === e.target) {
      navigate(-1);
    }
  };

  const onBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!movie) {
      return;
    }

    const img = new Image();
    img.src = makeImagePath(movie.backdrop_path, 'original');

    img.onload = () => {
      console.log('이미지 다운 완료');
      setSrc(img.src);
    };
  }, [movie]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return movieId !== '' && movie ? (
    <AnimatePresence>
      <MovieDetailContainer
        onClick={onClick}
        layoutId={movieId}
        backgroundImage={makeImagePath(movie.backdrop_path, 'original')}
      >
        <motion.div className="MovieDetail">
          {/*<img className="MovieDetail__image" src={makeImagePath(movie.backdrop_path, 'original')} alt="" />*/}
          <img className="MovieDetail__image" src={src} alt="" />
          <div className="MovieDetail__image-gradient">
            <button onClick={onBack}>X</button>
          </div>
          <h2 className="MovieDetail__title">{movie.title}</h2>
          <div className="MovieDetail__infomation">
            <p className="MovieDetail__infomation-description">{movie.overview}</p>
            <p>Budget: {movie.budget}</p>
            <p>Revenue: {movie.revenue}</p>
            <p>Runtime: {movie.runtime}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Homepage: {movie.homepage}</p>
          </div>
        </motion.div>
      </MovieDetailContainer>
    </AnimatePresence>
  ) : null;
};

export default MovieDetail;
