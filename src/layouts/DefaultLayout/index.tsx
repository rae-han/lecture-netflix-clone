import React from 'react';

import Header from '@/src/components/Header';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;
