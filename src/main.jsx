import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import router from './router';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);