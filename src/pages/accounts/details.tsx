import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/global-config';
import { _accountList } from 'src/_mock/_user';

import { AccountDetailsView } from './components/account-details-view';

// ----------------------------------------------------------------------

const metadata = { title: `Account Details | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  const { id = '' } = useParams();

  const currentUser = _accountList.find((user) => user.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AccountDetailsView user={currentUser} />
    </>
  );
}
