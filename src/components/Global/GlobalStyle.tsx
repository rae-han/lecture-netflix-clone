import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap');

  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    color:${(props) => props.theme.white.darker};
    line-height: 1.2;
    background-color: black;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;
