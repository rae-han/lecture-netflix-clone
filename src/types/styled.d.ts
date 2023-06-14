import { theme } from '../styles/theme.ts';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    red: string;
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}
// declare module 'styled-components' {
//   type Theme = typeof theme;
//
//   export interface DefaultTheme extends Theme {}
// }
