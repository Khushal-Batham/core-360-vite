import type { NavSectionProps } from 'src/components/nav-section';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData: NavSectionProps['data'] = [
  /**
   * Overview
   */
  // {
  //   subheader: 'Overview',
  //   items: [
  //     {
  //       title: 'One',
  //       path: paths.dashboard.root,
  //       icon: ICONS.dashboard,
  //       info: <Label>v{CONFIG.appVersion}</Label>,
  //     },
  //     { title: 'Two', path: paths.dashboard.two, icon: ICONS.ecommerce },
  //     { title: 'Three', path: paths.dashboard.three, icon: ICONS.analytics },
  //   ],
  // },
  /**
   * Management
   */
  {
    subheader: 'CRM',
    items: [
      {
        title: 'Contacts',
        path: paths.contact.root,
        icon: ICONS.user,
        // children: [
        //   { title: 'List', path: paths.contact.list },
        //   { title: 'Details', path: paths.contact.demo.details },
        // ],
      },

      {
        title: 'Accounts',
        path: paths.account.root,
        icon: ICONS.ecommerce,
        // children: [
        //   { title: 'List', path: paths.account.list },
        //   { title: 'Details', path: paths.account.demo.details },
        // ],
      },
    ],
  },
  // {
  //   subheader: 'Accounts',
  //   items: [
  //     {
  //       title: 'Contacts',
  //       path: paths.account.root,
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'List', path: paths.account.list },
  //         { title: 'Details', path: paths.account.demo.details },
  //       ],
  //     },
  //   ],
  // },
];
