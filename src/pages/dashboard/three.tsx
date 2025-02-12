import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

const metadata = { title: `Page three | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <Helmet>
      <title> {metadata.title}</title>
    </Helmet>
  );
}
