# 1. 개발 환경

- Apple m1(2022)
    - OS: MacOS(13.1, ventura)
- Runtime: Node 18.15.0 (with npm@9.5.0)
- Language: Typescript 5.0.4
- Libraries and Frameworks
    - React 18
    - 데이터 패칭: react-query, axios
    - ~~상태 관리: recoil(관련 코드 완성 못했음.)~~
    - 코드 컨벤션: eslint, prettier
    - 스타일: styled-component, sass

# 2. 실행 방법

## 2.1. 패키지 설치

```tsx
npm install
```

## 2.2. 프로그램 실행

```tsx
// 개발
npm run dev
```

## ~~2.3. 환경변수(constants에 넣어 둠)~~

```tsx
API_URL=https://movies-api.nomadcoders.workers.dev
IMG_URL=https://image.tmdb.org/t/p
```

# 3. 고민 했던 부분과 구현 방법

## 3.1. 리스트 화면

### 3.1.1. 화면 구성 및 라우터

리스트 화면 같은 경우 카테고리(popular, coming-soon, now-playing)에 따라 데이터만 달라질 뿐 같은 화면, 같은 데이터 구성으로 이루어져 있습니다. 그래서 각각 페이지를 만들지 않고 한 페이지에서 카테고리의 키를 기반으로 페이지를 구성하고 데이터를 패칭해오려 했습니다.

그러기 위해서  라우터에 접근할 때 :id를 이용해서 컴포넌트에서 파라미터 값으로 받을수 있게 했습니다.

```tsx
// router/index.ts
{
    path: '/',
    element: <App />,
    children: [
      {
        path: ':type?',
        element: <Home />,
      },
			...
}
```

```tsx
// components/MovieList/index.ts
const { type = 'popular' } = useParams();
```

첫 홈 화면에서는 아무 값도 없기 때문에 기본 값을 주었습니다. 이렇게 함으로 다른 카테고리에 같은 아이템이 있다면 컴포넌트를 재사용할 수 있었습니다(카테고리를 왔다갔다 하면 재사용 되는 것을 확인 가능합니다).

사실 카테고리 값은 따로 관리 하고 있어서 categories[0].key 로 해줬으면 좀 더 좋았을 것 같습니다.

### 3.1.2. 데이터 패칭

3.1.2 의 방법으로 동적으로 키를 가질수 있기 때문에 이 값을 이용하여 데이터 패칭을 했습니다. 애초에 키를 api pahtname와 같은 값을 사용 했기 때문에 키 값을 그대로 이용해도 괜찮았습니다.

useQuery를 사용할 때 라우터 키 값을 키로 사용하여 유일한 키를 가질 수 있었고, useQuery 안의 쿼리 함수에서는 그 키를 받아올 수 있기 때문에 그 값을 이용해서 데이터 통신을 하게 하여 라우터에 맞는 데이터를 받아 왔습니다.

```tsx
// components/MovieList/index.ts
const { type = 'popular' } = useParams();
const { data, isLoading } = useMovies(type);
```

```tsx
// hooks/queries/movie.ts
export const useMovies = (type: string) => {
  return useQuery<MoviesResponse>(['movies', type], fetchMoviesAPI);
};
```

```tsx
// apis/movie.ts
export function fetchMoviesAPI({ queryKey }: QueryFunctionContext) {
  const [_, type] = queryKey;
  return api.get(`/${type}`).then((response) => response.data);
}
```

## 3.2. 버벅임을 개선하기 위한 노력

프로젝트를 완성 했을때 버벅임이 있다는 것을 알았는데 모바일 환경에서야 원래 60프레임 애니메이션 같은 경우 원할하게 보이지 않는다해도 데스크탑 환경에서도 동일한 증상이 있어 해결하려고 했습니다.

### 3.2.1. 이미지 공간 확보

애니메이션이 튀는 현상이 있을 때 대부분이 이미지 공간이 확보되지 않아 이미지가 로드 됐을 때 이미지 공간이 생기고 그 크기 차이로 인해 애니메이션도 그 크기의 반 만큼 버벅인다는 것을 보고 모든 이미지에 `aspect-ratio` 옵션을 사용해 공간을 확보해 줬습니다.

### 3.2.2. 화면 크기에 맞는 이미지 사용

이번 프로젝트 같은 경우 api에서 original, 200w, 300w, 400w, 500w 이미지를 제공 한다는 것을 확인 했고 화면 크기에 맞는 이미지를 제공하려고 했습니다.

srcSet 속성에 화면 크기에 따라 어떤 이미지를 줄 것인지 명시하고, 모든 이미지는 화면을 100% 채울 필요 없이 한 행에 3개의 이미지를 랜더하므로 실제 이미지가 얼마만큼 영역을 차지할 지는 sizes 속성에 명시했습니다.

```tsx
// components/MovieItem/index.ts
<img
  className="movie-image"
  ref={imgRef}

  src={src}
  srcSet={srcSet}
  data-src={makeImagePath(movie.poster_path)}
  data-src-set={makeImageSrcset(movie.poster_path, imageSrcset)}
  sizes={makeImageSizes()}
  alt=""
/>
```

```tsx
// utils
export function makeImageSrcset(image: string, sizes: ImageSrcset[]) {
  const srcset = sizes.map((size) => `https://image.tmdb.org/t/p/${size.key}${image} ${size.descriptor}`).join(', ');
  return srcset;
}

export const makeImageSizes = (sizes: ImageSizes[] = defaultSizes) => {
  const sizesValue = sizes
    .map((size) => `${size.query ? `(min-width: ${size.query}px) ` : ''}${size.size}px`)
    .join(', ');
  return sizesValue;
};

export const defaultSizes: ImageSizes[] = [
  { query: 640, size: 400 },
  { query: 480, size: 300 },
  { query: 320, size: 200 },
  { size: 100 },
];
```

### ~~3.2.3. 이미지 재사용~~

사실 이 부분을 제대로 구현 못해 버그(전 상세화면 이미지가 보이는 현상)가 있지만 나중에 해결 하거나 누군가에게 도움을 받기 위해 내용만 남깁니다. 상세 화면 이미지 같은 경우 이미지의 크기가 워낙 커서 우선 리스트를 만들 때 쓴 캐시된 이미지를 먼저 보여주고 그 다음 로드가 다 됐을 때 이미지를 보여주려고 했습니다.

```tsx
// components/MovieItem/index.ts
const onClick = () => {
  navigate(`?movieId=${movie.id}`, {
    state: {
      ...movie, // 1. 데이터를 상세 페이지에 넘겨 주고
    },
  });
};
```

```tsx
// components/MovieDetail/index.ts
// 2. 받는다(여기서 잘 안됨, recoil을 사용하면 될거 같긴 한데.. router를 사용해 보고 싶다)
const [src, setSrc] = useState(() => makeImagePath(location?.state?.poster_path));

// 3. 그리고 원본 이미지 다운이 완료 되면 다시 바꿔 준다.
useEffect(() => {
  if (!movie) {
    return;
  }

  const img = new Image();
  img.src = makeImagePath(movie.backdrop_path, 'original');

  img.onload = () => {
    console.log('이미지 다운 완료');
    setSrc(img.src);
  };
}, [movie]);
```

### 3.2.4. 이미지 지연 로딩

리스트 화면의 이미지 같은 경우 20개 모두 필요한 것이 아니라 맨 위에 보이는 부분만 있으면 되기 때문에 필요한 부분인 로딩 할수 있도록 해줬습니다. 추가로적으로 인덱스 값이 6 또는 9 이하일 때는 해당 코드 실행 없이 바로 이미지를 보여주도록 리펙토링 하면 더 좋을 것 같습니다.

```tsx
// hooks/useIntersectionObserver.tsx
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
```

# 4. 더 알아볼 것

1. intersection observer api 를 사용할 때 내부에서 ref.current의 타입 좁히기가 생각처럼 잘 안됐다. 알아봐야 겠다.
2. 위의 3.2.4 커스텀 훅에서 src, srcSet 리턴 값의 타입에 refObject가 섞여 나왔다.. 알아봐야 겠다.
    1. 다른분들 커스텀 훅 만드는 것 보고 하나만 해봤는데 문제가 생겼다.. 공부가 더 필요한 것 같다.
3. 사이즈에 따라 이미지를 서빙하고 싶을 때 3.2.2 방법 말고도 picture source 태그를 사용하는 방법도 있다. 내 상각엔 이 방법은 브라우저에 맞는 이미지 타입(avif, webp, jpg)을 서빙할 때 더 도움이 될거 같은데 다른 기술 블로그를 찾아보면서 알아봐야 겠다.
4. 예전에 깃 훅이라는 걸 사용해봐라는 조언을 받았는데 아직 사용 못해보고 있다. 알아봐야 겠다.