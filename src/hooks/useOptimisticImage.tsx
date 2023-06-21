import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { makeImagePath } from '../utils/makeImagePath.ts';

interface UseOptimisticImage {
  (loadingImage: string, doneImage: string | undefined): [string];
}

export const useOptimisticImage: UseOptimisticImage = (loadingImage, loadedImage) => {
  const location = useLocation();
  const [src, setSrc] = useState(() => makeImagePath(loadingImage));

  useEffect(() => {
    if (!loadedImage) {
      return;
    }

    const img = new Image();
    img.src = makeImagePath(loadedImage, 'original');

    img.onload = () => {
      console.log('이미지 다운 완료');
      setSrc(img.src);
    };
  }, [loadedImage]);

  return [src];
};
