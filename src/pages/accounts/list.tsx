import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/global-config';

import { AccountListView } from './components/account-list-view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact list | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AccountListView />
    </>
  );
}
