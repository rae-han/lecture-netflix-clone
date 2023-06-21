import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [state, setState] = useState(1);
  const [state1, setState1] = useState(1);
  const [state2, setState2] = useState(1);
  const [state3, setState3] = useState(1);
  const [renderTime1, setRenderTime1] = useState(0);
  const [renderTime2, setRenderTime2] = useState(0);

  const handleClick = () => {
    const start1 = performance.now();
    setState((prev) => prev + 1);
    const end1 = performance.now();

    setRenderTime1(end1 - start1);

    const start2 = performance.now();
    setState1((prev) => prev + 1);
    setState2((prev) => prev + 1);
    setState3((prev) => prev + 1);
    const end2 = performance.now();

    setRenderTime1(end2 - start2);
  };

  useEffect(() => {
    console.log({ renderTime1, renderTime2 });
  }, [renderTime1, renderTime2]);

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default MyComponent;
