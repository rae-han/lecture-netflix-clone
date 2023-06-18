import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import DefaultLayout from '../../layouts/DefaultLayout';
import MovieList from '../../components/MovieList';
import MovieDetail from '../../components/MovieDetail';

const HomePage = () => {
  const location = useLocation();
  const queries = new URLSearchParams(location.search);
  const movieId = queries.get('movieId') ?? '';

  return (
    <DefaultLayout>
      <MovieList />
      {movieId ? <MovieDetail /> : null}
    </DefaultLayout>
  );
};

export default HomePage;
