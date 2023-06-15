function RootBoundary() {
const error = useRouteError();

if (isRouteErrorResponse(error)) {
if (error.status === 404) {
return <div>This page doesn't exist!</div>;
}

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
}

return <div>Something went wrong</div>;
}


Web: React Query Custom Hooks로 더 잘 사용해보기
https://medium.com/hcleedev/web-react-query-custom-hooks%EB%A1%9C-%EB%8D%94-%EC%9E%98-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0-2ea47fb358c3

https://fonts.google.com

https://flatuicolors.com/

https://app.src%2Findex.tsx)quicktype.io/?l=ts


npm install --save react-apexcharts apexcharts

# recoil
아톰을 생성
각각의 아톰에는 원하는 값을 저장.

https://regexr.com/

https://regex101.com/

recoil의 selectors(selector)는 derived state를 나타낸다.
derived state란 state를 입력 받아 그걸 변형해 반환하는 순수함수를 거쳐 반환된 값이다.

todo 리스트에서 status가 각각 다를수 있는데(done, todo, ing) 이 값을 기준으로 분류 가능하다.
이게 있으면 각각 값에 따라 값을 또 따로 관리할 필요 없이 하나의 atom으로 관리 가능하다.(done 따로, ing 따로)


>