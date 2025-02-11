import { Divider } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { AccountTicketsList } from './account-tickets';

// import { ContactTicketsList } from '../components/contact-tickets';

// ----------------------------------------------------------------------

export function AccountDetailsTickets() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Tickets List"
        // links={[
        //   { name: 'Dashboard', href: paths.dashboard.root },
        //   { name: 'Contacts', href: paths.dashboard.contacts.root },
        //   { name: 'Notes' },
        // ]}
        sx={{ mb: { xs: 1, md: 1 } }}
      />
      <Divider sx={{ borderColor: 'var(--border-color-base)' }} />

      <AccountTicketsList />
    </DashboardContent>
  );
}
