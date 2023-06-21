import { ThemeProvider } from 'styled-components';
import { Outlet, RouterProvider } from 'react-router-dom';

import { theme } from './styles/theme.ts';

import '@/styles/reset.scss';
import '@/styles/common.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRef } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
