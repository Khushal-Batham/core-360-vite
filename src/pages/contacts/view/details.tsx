import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/global-config';
import { _userList } from 'src/_mock/_user';

import { DetailsPageCommon } from 'src/components/details/details';

import { ContactDetails } from './components/contact-details';

// ----------------------------------------------------------------------

const metadata = { title: `User Details | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  const { id = '' } = useParams();

  const currentUser = _userList.find((user) => user.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DetailsPageCommon
        heading="Details"
        backHref={paths.contact.root}
        breadcrumbsLink={[
          { name: 'Contacts', href: paths.contact.root },
          { name: currentUser?.name },
        ]}
        components={<ContactDetails currentUser={currentUser} />}
      />
    </>
  );
}
