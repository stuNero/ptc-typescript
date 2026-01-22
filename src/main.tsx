import type { RouteObject } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider }
  from 'react-router-dom';
import './css/index.css';
import routes from './routes.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes as RouteObject[]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);