import { createBrowserRouter } from 'react-router-dom';

import App from '../App.tsx';
import Home from '../pages/Home';
import Test from '../pages/Test';
<<<<<<< HEAD
import First from '../pages/Test/first.tsx';
import Second from '../pages/Test/second.tsx';
import Third from '../pages/Test/third.tsx';
=======
>>>>>>> 59aae27f87f20a60166542c634721767cf6ef0ca

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
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
