import { createBrowserRouter } from 'react-router-dom';

import App from '../App.tsx';
import Home from '../pages/Home';
import Test from '../pages/Test';
import First from '../pages/Test/first.tsx';
import Second from '../pages/Test/second.tsx';
import Third from '../pages/Test/third.tsx';
import Forth from '../pages/Test/forth.tsx';
import Fifth from '../pages/Test/fifth.tsx';

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
      {
        path: 'test',
        element: <Test />,
      },
      {
        path: 'test/first',
        element: <First />,
      },
      {
        path: 'test/second',
        element: <Second />,
      },
      {
        path: 'test/third',
        element: <Third />,
      },
      {
        path: 'test/forth',
        element: <Forth />,
      },
      {
        path: 'test/fifth',
        element: <Fifth />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
