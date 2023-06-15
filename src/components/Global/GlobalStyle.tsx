import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap');

  * {
    box-sizing: border-box; 
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
    color: black;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;
