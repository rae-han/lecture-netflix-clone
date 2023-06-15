import { createBrowserRouter } from 'react-router-dom';

import App from '../App.tsx';
import Home from '../pages/Home';
import TV from '../pages/TV';
import Search from '../pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'movie/:movieId',
        element: <Home />,
      },
      {
        path: 'tv',
        element: <TV />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
