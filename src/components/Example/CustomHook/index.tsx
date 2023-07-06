import React from 'react';

import { useInput } from './useInput.tsx';

const CustomHookComponent = () => {
  const { value: name, handleValue: onChangeName } = useInput('');

  return (
    <div className="Input">
      <label htmlFor="Input__input">Name</label>
      <input type="text" id="Input__input" value={name} onChange={onChangeName} />
    </div>
  );
};

export default CustomHookComponent;
