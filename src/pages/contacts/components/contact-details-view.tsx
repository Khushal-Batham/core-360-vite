import type { IUserItem } from 'src/types/user';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ContactDetails } from './contact-details';

// ----------------------------------------------------------------------

type Props = {
  user?: IUserItem;
};

export function ContactDetailsView({ user: currentUser }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Details"
        backHref={paths.contact.list}
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Contacts', href: paths.contact.root },
          { name: currentUser?.name },
        ]}
        sx={{ mb: { xs: 1, md: 1 } }}
      />

      <ContactDetails currentUser={currentUser} />
    </DashboardContent>
  );
}
