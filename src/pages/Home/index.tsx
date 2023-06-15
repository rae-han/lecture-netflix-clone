import React, { useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useMatch, useNavigate } from 'react-router-dom';

import DefaultLayout from '../../layouts/DefaultLayout';
import { useMovies } from '../../hooks/queries/movie.ts';
import {
  Banner,
  Box,
  boxVariants,
  Info,
  infoVariants,
  Loader,
  MovieModal,
  Overlay,
  Overview,
  Row,
  rowVariants,
  Slider,
  Title,
  Wrapper,
} from './styles.tsx';
import makeImagePath from '../../utils/makeImagePath.ts';

const OFFSET = 6;

const HomePage = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { data, isLoading } = useMovies();
  const moviePathMatch = useMatch('/movie/:movieId');
  const { scrollY } = useScroll();

  console.log(moviePathMatch);

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const incraseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / OFFSET) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const onBoxClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };
  const onOverlayClick = () => navigate(-1);

  return (
    <DefaultLayout>
      <Wrapper>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <>
            <Banner onClick={incraseIndex} bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}>
              <Title>{data?.results[0].title}</Title>
              <Overview>{data?.results[0].overview}</Overview>
            </Banner>
            <Slider>
              <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                <Row
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ type: 'tween', duration: 1 }}
                  key={index}
                >
                  {data?.results
                    .slice(1)
                    .slice(OFFSET * index, OFFSET * index + OFFSET)
                    .map((movie) => (
                      <Box
                        key={movie.id}
                        layoutId={movie.id + ''}
                        onClick={() => onBoxClick(movie.id)}
                        bgPhoto={makeImagePath(movie.backdrop_path, 'w500')}
                        whileHover="hover"
                        initial="normal"
                        variants={boxVariants}
                        transition={{ type: 'tween' }}
                      >
                        {/* 사실 여기에 이미지가 있는게 더 나은 방법이라 생각 된다. */}
                        <Info variants={infoVariants}>
                          <h4>{movie.title}</h4>
                        </Info>
                      </Box>
                    ))}
                </Row>
              </AnimatePresence>
            </Slider>
            <AnimatePresence>
              {moviePathMatch ? (
                <>
                  <Overlay
                    layoutId={moviePathMatch.params.movieId}
                    onClick={onOverlayClick}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  ></Overlay>
                  {/*<MovieModal style={{ top: scrollY.get() + 100 }} layoutId={moviePathMatch.params.movieId}>*/}
                  {/*  hello*/}
                  {/*</MovieModal>*/}
                  <MovieModal style={{ top: scrollY.get() + 100 }} layoutId={moviePathMatch.params.movieId}>
                    hello
                  </MovieModal>
                </>
              ) : null}
            </AnimatePresence>
          </>
        )}
      </Wrapper>
      {/*{data ? <img src={`https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path}`} alt="image" /> : null}*/}
      <div style={{ height: '200vh' }}></div>
    </DefaultLayout>
  );
};

export default HomePage;
