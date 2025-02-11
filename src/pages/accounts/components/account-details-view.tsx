import type { AccountList } from 'src/types/user';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { AccountDetails } from './account-details';

// ----------------------------------------------------------------------

type Props = {
  user?: AccountList;
};

export function AccountDetailsView({ user: currentUser }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Details"
        backHref={paths.account.list}
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Account', href: paths.account.root },
          { name: currentUser?.account_name },
        ]}
        sx={{ mb: { xs: 1, md: 1 } }}
      />

      <AccountDetails currentUser={currentUser} />
    </DashboardContent>
  );
}
