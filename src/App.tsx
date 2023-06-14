import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';

import { theme } from './styles/theme.ts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      asdf
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
