import { Button, Divider } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ContactNotes } from './contact-notes';

// ----------------------------------------------------------------------

export function ContactDeatilsNotes() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Notes"
        // links={[
        //   { name: 'Dashboard', href: paths.dashboard.root },
        //   { name: 'Contacts', href: paths.dashboard.contacts.root },
        //   { name: 'Notes' },
        // ]}
        action={
          <Button
            // component={RouterLink}
            // href={paths.dashboard.contacts.new}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New Notes
          </Button>
        }
        sx={{ mb: { xs: 1, md: 1 } }}
      />
      <Divider sx={{ borderColor: 'var(--border-color-base)' }} />

      <ContactNotes />
    </DashboardContent>
  );
}
