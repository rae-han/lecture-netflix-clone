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
