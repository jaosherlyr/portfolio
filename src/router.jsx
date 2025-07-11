import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout.jsx';
import Home from './pages/HomePage.jsx';
import Works from './pages/WorkPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "works", element: <Works /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);

export default router;
