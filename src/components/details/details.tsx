import type { Theme, SxProps } from '@mui/system';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import type { BreadcrumbsLinkProps } from '../custom-breadcrumbs/breadcrumb-link';

interface ContactDeatilsActivitiesProps {
  heading: string;
  breadcrumbsLink?: BreadcrumbsLinkProps[];
  backHref?: string;
  components?: React.ReactNode;
  action?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export function DetailsPageCommon({
  heading = '',
  breadcrumbsLink,
  components,
  action,
  sx,
  backHref,
}: ContactDeatilsActivitiesProps): JSX.Element {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading={heading}
        links={breadcrumbsLink}
        sx={{ mb: { xs: 1, md: 1 }, ...sx }}
        action={action}
        backHref={backHref}
      />
      {components}
    </DashboardContent>
  );
}
