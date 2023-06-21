import { IMG_URL } from '../constants/api.ts';

export function makeImagePath(image: string, size = 'w500') {
  return `${IMG_URL}/${size}${image}`;
}

export function makeBgImagePath(image: string) {
  return `${IMG_URL}/original${image}`;
}
