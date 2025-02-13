import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';
import { useTranslate } from 'src/locales';

import { DetailsPageCommon } from 'src/components/details/details';

import { ContactListView } from './components/contact-list-view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact list | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  const { t } = useTranslate('navbar');

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DetailsPageCommon
        heading={`${t('CONTACTS')}`}
        breadcrumbsLink={[{ name: `${t('CONTACTS')}`, href: paths.contact.root }]}
        components={<ContactListView />}
      />
    </>
  );
}
