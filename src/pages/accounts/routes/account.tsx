import type { RouteObject } from 'react-router';

import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import { CONFIG } from 'src/global-config';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

import { usePathname } from '../../../routes/hooks';

// ----------------------------------------------------------------------

// Account
const AccountListPage = lazy(() => import('src/pages/accounts/view/list'));
const AccountDetailsPage = lazy(() => import('src/pages/accounts/view/details'));
// ----------------------------------------------------------------------

function SuspenseOutlet() {
  const pathname = usePathname();
  return (
    <Suspense key={pathname} fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  );
}

const dashboardLayout = () => (
  <DashboardLayout>
    <SuspenseOutlet />
  </DashboardLayout>
);

export const accountRoutes: RouteObject[] = [
  {
    path: 'account',
    element: CONFIG.auth.skip ? dashboardLayout() : <AuthGuard>{dashboardLayout()}</AuthGuard>,
    children: [
      { index: true, element: <AccountListPage /> },
      { path: 'list', element: <AccountListPage /> },
      { path: ':id/details', element: <AccountDetailsPage /> },
    ],
  },
];
