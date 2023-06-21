import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [renderTime, setRenderTime] = useState(0);

  const handleClick = () => {
    let state = 1;
    const start = performance.now();
    state++;
    state = state + 1;
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
