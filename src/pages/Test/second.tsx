import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [state, setState] = useState(1);
  const [renderTime, setRenderTime] = useState(0);

  const handleClick = () => {
    const start = performance.now();
    setState((prev) => prev + 1);
    const end = performance.now();

    setRenderTime(end - start);
  };

  useEffect(() => {
    console.log(renderTime);
  }, [renderTime]);

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default MyComponent;
