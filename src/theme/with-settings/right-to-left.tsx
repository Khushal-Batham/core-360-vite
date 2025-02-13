import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { useMemo, useEffect } from 'react';
import { CacheProvider } from '@emotion/react';

import type { ThemeDirection } from '../types';

// ----------------------------------------------------------------------

type RtlProps = {
  children: React.ReactNode;
  direction: ThemeDirection;
};

export function Rtl({ children, direction }: RtlProps) {
  const cacheRtl = useMemo(
    () =>
      createCache({
        key: 'rtl',
        prepend: true,
        stylisPlugins: [rtlPlugin],
      }),
    []
  );

  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  return direction === 'rtl' ? (
    <CacheProvider value={cacheRtl}>{children}</CacheProvider>
  ) : (
    <>{children}</>
  );
}
