import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';

import App from './app';
import store from './store'; 
import { routesSection } from './routes/pages';
import { ErrorBoundary } from './routes/components';

// ----------------------------------------------------------------------

const router = createBrowserRouter([
  {
    Component: () => (
      <App>
        <Outlet />
      </App>
    ),
    errorElement: <ErrorBoundary />,
    children: routesSection,
  },
]);

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Provider store={store}> 
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  </StrictMode>
);
