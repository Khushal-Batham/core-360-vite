import { Divider } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ContactActivities } from '../contact-activities';

// ----------------------------------------------------------------------

export function ContactDeatilsActivities() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Activities"
        // links={[
        //   { name: 'Dashboard', href: paths.dashboard.root },
        //   { name: 'Contacts', href: paths.dashboard.contacts.root },
        //   { name: 'Activities' },
        // ]}
        sx={{ mb: { xs: 1, md: 1 } }}
      />

      <Divider sx={{ borderColor: 'var(--border-color-base)' }} />

      <ContactActivities />
    </DashboardContent>
  );
}
