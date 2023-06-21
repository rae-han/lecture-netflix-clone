import { ImageSrcset } from '../typings/db.ts';

export function makeImageSrcset(image: string, sizes: ImageSrcset[]) {
  const srcset = sizes.map((size) => `https://image.tmdb.org/t/p/${size.key}${image} ${size.descriptor}`).join(', ');
  return srcset;
}
