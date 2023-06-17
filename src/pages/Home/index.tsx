import React from 'react';

import DefaultLayout from '../../layouts/DefaultLayout';
import MovieList from '../../components/MovieList';
import MovieDetail from '../../components/MovieDetail';

const HomePage = () => {
  return (
    <DefaultLayout>
      <MovieList />
      <MovieDetail />
    </DefaultLayout>
  );
};

export default HomePage;
