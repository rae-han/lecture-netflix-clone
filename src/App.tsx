import { ThemeProvider } from 'styled-components';
import { Outlet, RouterProvider } from 'react-router-dom';

import { theme } from './styles/theme.ts';

import '@/styles/reset.scss';
// import Header from './components/Header';
// import Home from './pages/Home';
// import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
