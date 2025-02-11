import { Divider } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ContactWhatsapp } from './contact-whatsapp';

// ----------------------------------------------------------------------

export function ContactDeatilsWhatsppp() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Whatsapp"
        // links={[
        //   { name: 'Dashboard', href: paths.dashboard.root },
        //   { name: 'Contacts', href: paths.dashboard.contacts.root },
        //   { name: 'Whatsapp' },
        // ]}
        sx={{ mb: { xs: 1, md: 1 } }}
      />
      <Divider sx={{ borderColor: 'var(--border-color-base)' }} />

      <ContactWhatsapp />
    </DashboardContent>
  );
}
