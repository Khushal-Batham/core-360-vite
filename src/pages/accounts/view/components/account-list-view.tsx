import type { TableHeadCellProps } from 'src/components/table';

import { paths } from 'src/routes/paths';

import { _accountList } from 'src/_mock';

import { TableCustom } from 'src/components/table/table-custom';

// ----------------------------------------------------------------------

const TABLE_HEAD: TableHeadCellProps[] = [
  { id: 'account_name', label: 'Account Name', width: 180, filterable: true },
  { id: 'website', label: 'Website', width: 180 },
  { id: 'email', label: 'Email', width: 180 },
  { id: 'contact_number', label: 'Contact number', width: 180 },
  { id: 'address', label: 'Address', width: 180 },
  { id: 'owner', label: 'Owner', width: 150, filterable: true },
  { id: 'status', label: 'Status', width: 100 },
  { id: 'rating', label: 'rating', width: 100 },
  { id: 'type', label: 'type', width: 100 },
  { id: 'action', label: 'Action', width: 100, align: 'center' },
];

// ----------------------------------------------------------------------
export function AccountListView() {
  const editHref = (id: string): string => paths.account.details(id);

  return (
    <TableCustom
      columns={TABLE_HEAD}
      data={_accountList}
      tableToolbar
      actionButton="Account"
      editHref={editHref}
    />
  );
}
