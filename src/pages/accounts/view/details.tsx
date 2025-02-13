import { Helmet } from 'react-helmet-async';

import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/global-config';
import { useTranslate } from 'src/locales';
import { _accountList } from 'src/_mock/_user';

import { DetailsPageCommon } from 'src/components/details/details';

import { AccountDetails } from './components/account-details';

// ----------------------------------------------------------------------

const metadata = { title: `Account Details | Dashboard - ${CONFIG.appName}` };

export default function AccountDetailsPage() {
  const { t } = useTranslate('navbar');
  const { id = '' } = useParams();

  const currentUser = _accountList.find((user) => user.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DetailsPageCommon
        heading={currentUser?.account_name || 'Unknown'}
        backHref={paths.account.root}
        breadcrumbsLink={[
          { name: `${t('ACCOUNTS')}`, href: paths.account.root },
          { name: currentUser?.account_name || 'Unknown' },
        ]}
        components={<AccountDetails currentUser={currentUser} />}
      />
    </>
  );
}
