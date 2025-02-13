import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/global-config';
import { useTranslate } from 'src/locales';
import { _userList } from 'src/_mock/_user';

import { DetailsPageCommon } from 'src/components/details/details';

import { ContactDetails } from './components/contact-details';

// ----------------------------------------------------------------------

const metadata = { title: `User Details | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  const { t } = useTranslate('navbar');
  const { id = '' } = useParams();

  const currentUser = _userList.find((user) => user.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DetailsPageCommon
        heading={currentUser?.name || 'Unknown'}
        backHref={paths.contact.root}
        breadcrumbsLink={[
          { name: `${t('CONTACTS')}`, href: paths.contact.root },
          { name: currentUser?.name },
        ]}
        components={<ContactDetails currentUser={currentUser} />}
      />
    </>
  );
}
