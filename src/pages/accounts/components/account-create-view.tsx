import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

// import { UserNewEditForm } from '../contact-details';

// ----------------------------------------------------------------------

export function AccountCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new user"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Account', href: paths.account.root },
          { name: 'New user' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      {/* <UserNewEditForm /> */}
    </DashboardContent>
  );
}
