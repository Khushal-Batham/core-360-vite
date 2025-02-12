import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { DetailsPageCommon } from 'src/components/details/details';

import { ContactListView } from './components/contact-list-view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact list | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DetailsPageCommon
        heading="List"
        breadcrumbsLink={[{ name: 'Contacts', href: paths.contact.root }, { name: 'List' }]}
        components={<ContactListView />}
      />
    </>
  );
}
