import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Index from './pages';
import Headlines from './pages/headlines';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/headlines',
    element: <Headlines />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
