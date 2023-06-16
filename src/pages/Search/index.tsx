import React from 'react';
import { useLocation } from 'react-router-dom';

import DefaultLayout from '../../layouts/DefaultLayout';

const SearchPage = () => {
  const location = useLocation();
  const queries = new URLSearchParams(location.search);
  const keyword = queries.get('keyword');
  console.log({ location, queries, keyword });

  return <DefaultLayout>123</DefaultLayout>;
};

export default SearchPage;
