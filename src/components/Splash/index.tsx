import React from 'react';

import { SplashContainer } from './styles.tsx';

const Splash = () => {
  return (
    <SplashContainer layoutId="movie">
      <span className="spinner"></span>
    </SplashContainer>
  );
};

export default Splash;
