import React, { useState } from 'react';

import { InputWrapper } from './InputWrapper.tsx';

const CompoundComponent = () => {
  const [name, setName] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <InputWrapper id="name" value={name} type="text" onChange={handleChangeName}>
        <InputWrapper.Label>Name</InputWrapper.Label>
        <InputWrapper.Input />
      </InputWrapper>
    </div>
  );
};

export default CompoundComponent;
