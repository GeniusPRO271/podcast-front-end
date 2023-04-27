import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './screens/home/home';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Programas from './screens/programas/programas';
import Auspicios from './screens/auspicios/auspicios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'programas',
    element: <Programas programas={await getSeries()} />,
  },
  {
    path: 'auspicios',
    element: <Auspicios />,
  },
]);

async function getSeries() {
  const response = await fetch('http://localhost:3000/series');
  const data = await response.json();
  return data;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
