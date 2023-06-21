import React, { useEffect, useState } from 'react';

const CountLabel = ({ count }) => {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);

  useEffect(() => {
    setTrend(count > prevCount ? 'increasing' : 'decreasing');
  }, [count]);

  useEffect(() => {
    setPrevCount(count);
  }, [count, trend]);

  return (
    <>
      <h1>{count}</h1>
      {trend && <p>The count is {trend}</p>}
    </>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <CountLabel count={count} />
    </>
  );
};

export default App;
