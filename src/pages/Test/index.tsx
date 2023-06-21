<<<<<<< HEAD
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
=======
import React from 'react';

const sizes = ['original', 'w100', 'w200', 'w300', 'w400', 'w500', 'w600', 'w700', 'w800', 'w900', 'w1000'];

const Test = () => {
  return (
    <div>
      <h1>Test</h1>
      {sizes.map((size) => (
        <div key={size}>
          <h2>{size}</h2>
          <img src={`https://image.tmdb.org/t/p/${size}/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg`} alt="origin" />
        </div>
      ))}
    </div>
  );
};

export default Test;

// https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg
// https://image.tndb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg
// https://image.tndb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg
>>>>>>> 59aae27f87f20a60166542c634721767cf6ef0ca
