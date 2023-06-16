export function makeImagePath(image: string, size = 'w500') {
  return `https://image.tmdb.org/t/p/${size}${image}`;
}

export function makeBgImagePath(image: string) {
  return `https://image.tmdb.org/t/p/original${image}`;
}
