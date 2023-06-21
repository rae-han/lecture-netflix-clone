import { ImageSizes } from '../typings/db.ts';

const defaultSizes: ImageSizes[] = [
  { query: 640, size: 400 },
  { query: 480, size: 300 },
  { query: 320, size: 200 },
  { size: 100 },
];

export const makeImageSizes = (sizes: ImageSizes[] = defaultSizes) => {
  const sizesValue = sizes
    .map((size) => `${size.query ? `(min-width: ${size.query}px) ` : ''}${size.size}px`)
    .join(', ');
  return sizesValue;
};
