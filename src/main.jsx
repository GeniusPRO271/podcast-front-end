import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './screens/home/home';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Auspicios from './screens/auspicios/auspicios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'auspiciar',
    element: <Auspicios />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
