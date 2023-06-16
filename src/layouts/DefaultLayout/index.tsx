import React from 'react';

import Header from '../../components/Header';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <div style={{ height: '200vh' }}></div>
    </div>
  );
};

export default DefaultLayout;
