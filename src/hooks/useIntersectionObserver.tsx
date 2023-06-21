import { useEffect, useRef, useState } from 'react';

import { makeImageSrcset } from '../utils/makeImageSrcset.ts';
import { imageSrcset } from '../constants/image.ts';
import { makeImagePath } from '../utils/makeImagePath.ts';
import { Movie } from '../typings/db.ts';

export const useIntersectionObserver = (movie: Movie) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState<string | undefined>();
  const [srcSet, setSrcSet] = useState<string | undefined>();

  useEffect(() => {
    if ('IntersectionObserver' in window) {
      let observer: IntersectionObserver;

      if (imgRef?.current && !src) {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && imgRef.current) {
              // ?? 여기서 왜 imgRef.current를 두번 확인해줘야하지?
              // ?? 타입 좁히기를 한거 같은데 여전히 null이 뜬다..??
              setSrcSet(makeImageSrcset(movie.poster_path, imageSrcset));
              setSrc(makeImagePath(movie.poster_path));

              observer.unobserve(imgRef.current);
            }
          },
          {
            threshold: 0.25,
          },
        );

        observer.observe(imgRef.current);

        return () => {
          observer && observer.disconnect();
        };
      }
    }
  }, [movie.poster_path, src]);

  return [imgRef, src, srcSet];
};
