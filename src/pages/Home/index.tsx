import React from 'react';
import { useParams } from 'react-router-dom';

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
