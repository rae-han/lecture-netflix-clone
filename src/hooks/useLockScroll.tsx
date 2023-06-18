import { useEffect } from 'react';

export const useLockScroll = ($target = document.body) => {
  // const scrollPosition = window.;

  useEffect(() => {
    $target.style.overflow = 'hidden';
    // 사실 나는 레이아웃에 문제가 없어서 아래 코드는 필요 없다.
    // $target.style.pointerEvents = 'none';
    // $target.style.position = 'fixed';
    // $target.style.top = `-${scrollPosition}px`;
    // // 선택
    // $target.style.left = '0';
    // $target.style.right = '0';

    return () => {
      $target.style.overflow = 'unset';
      // body.style.removeProperty('overflow');
      // body.style.removeProperty('pointer-events');
      // body.style.removeProperty('position');
      // body.style.removeProperty('top');
      // body.style.removeProperty('left');
      // body.style.removeProperty('right');
    };
  }, []);
};
