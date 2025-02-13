import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';
import { useTranslate } from 'src/locales';

import { DetailsPageCommon } from 'src/components/details/details';

import { AccountListView } from './components/account-list-view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact list | Dashboard - ${CONFIG.appName}` };

export default function AccountListPage() {
  const { t } = useTranslate('navbar');

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DetailsPageCommon
        heading={`${t('ACCOUNTS')}`}
        breadcrumbsLink={[{ name: `${t('ACCOUNTS')}`, href: paths.account.root }]}
        components={<AccountListView />}
      />
    </>
  );
}
