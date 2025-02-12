import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { DetailsPageCommon } from 'src/components/details/details';

import { AccountListView } from './components/account-list-view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact list | Dashboard - ${CONFIG.appName}` };

export default function AccountListPage() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DetailsPageCommon
        heading="List"
        breadcrumbsLink={[{ name: 'Account', href: paths.account.root }, { name: 'List' }]}
        components={<AccountListView />}
      />
    </>
  );
}
