import { Navigate, useRoutes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { About } from '../About/About';
import { Portfolio } from '../Portfolio';

import { Contact } from '../Contact/Contact';

export const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/portfolio',
      element: <Portfolio />,
    },

    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);

  return routes;
};
