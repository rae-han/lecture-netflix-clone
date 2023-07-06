import React, { ChangeEventHandler, useState } from 'react';

import CompoundComponent from '../../components/Example/Compound';
import FunctionAsChildComponent from '../../components/Example/FunctionAsChild';
import CustomHook from '../../components/Example/CustomHook';
import CustomHookComponent from '../../components/Example/CustomHook';

const Input = () => {
  const [value, setValue] = useState('');

  const handleValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="Input">
        <label htmlFor="Input__input">Input Title</label>
        <input id="Input__input" type="text" value={value} onChange={handleValue} />
      </div>
      <CompoundComponent />
      <FunctionAsChildComponent />
      <CustomHookComponent />
    </>
  );
};

export default Input;
