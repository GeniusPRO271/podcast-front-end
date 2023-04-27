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
import Auspicios from './screens/auspicios/auspicios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'auspiciar',
    element: <Auspicios programas={await getSeries()} />,
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
