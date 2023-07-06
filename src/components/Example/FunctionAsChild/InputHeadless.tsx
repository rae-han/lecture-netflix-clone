import { useState } from 'react';

const InputHeadless = ({ children }) => {
  const [value, setValue] = useState('');

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  return children({
    value,
    onChange: handleChangeValue,
  });
};

export default InputHeadless;
