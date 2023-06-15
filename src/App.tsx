import { ThemeProvider } from 'styled-components';
import { Outlet, RouterProvider } from 'react-router-dom';

import { theme } from './styles/theme.ts';

import '@/styles/reset.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRef } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { GlobalStyle } from './components/Global/GlobalStyle.tsx';
// import Header from './components/Header';
// import Home from './pages/Home';
// import DefaultLayout from './layouts/DefaultLayout';

function App() {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
