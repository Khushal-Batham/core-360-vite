import { Divider } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ContactCalls } from './contact-calls';

// ----------------------------------------------------------------------

export function ContactDeatilsCalls() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Calls"
        // links={[
        //   { name: 'Dashboard', href: paths.dashboard.root },
        //   { name: 'Contacts', href: paths.dashboard.contacts.root },
        //   { name: 'Calls' },
        // ]}
        sx={{ mb: { xs: 1, md: 1 } }}
      />
      <Divider sx={{ borderColor: 'var(--border-color-base)' }} />

      <ContactCalls />
    </DashboardContent>
  );
}
