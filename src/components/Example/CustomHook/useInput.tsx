import { useState } from 'react';

export const useInput = (init = '') => {
  const [value, setValue] = useState(init);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return [value, handleValue];
};
