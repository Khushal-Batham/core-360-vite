import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Navigate } from 'react-router';

import { CONFIG } from 'src/global-config';

import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
import { contactRoutes } from '../../pages/contacts/routes/contact';
import { accountRoutes } from '../../pages/accounts/routes/account';

// ----------------------------------------------------------------------

const Page404 = lazy(() => import('src/pages/error/404'));

export const routesSection: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={CONFIG.auth.redirectPath} replace />,
  },

  // Auth
  ...authRoutes,

  // Dashboard
  ...dashboardRoutes,

  //contact
  ...contactRoutes,

  // account
  ...accountRoutes,

  // No match
  { path: '*', element: <Page404 /> },
];
