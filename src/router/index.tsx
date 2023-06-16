import { createBrowserRouter } from 'react-router-dom';

import App from '../App.tsx';
import Home from '../pages/Home';

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
        path: ':type',
        element: <Home />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
