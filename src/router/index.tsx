import { createBrowserRouter } from 'react-router-dom';

import App from '../App.tsx';
import Home from '../pages/Home';
import Test from '../pages/Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: ':type?',
        element: <Home />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
