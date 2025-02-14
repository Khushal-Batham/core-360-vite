import type { TableHeadCellProps } from 'src/components/table';

import { paths } from 'src/routes/paths';

import { _userList } from 'src/_mock';

import { TableCustom } from 'src/components/table/table-custom';

const TABLE_HEAD: TableHeadCellProps[] = [
  { id: 'name', label: 'Name', width: 180, filterable: true },
  { id: 'phoneNumber', label: 'Phone number', width: 180 },
  { id: 'email', label: 'Email', width: 180 },
  { id: 'country', label: 'Location', width: 180, filterable: true },
  { id: 'contact', label: 'Contact', width: 180 },
  { id: 'status', label: 'Status', width: 100 },
  { id: 'action', label: 'Action', width: 100, align: 'center' },
];

// ----------------------------------------------------------------------
export function ContactListView() {
  const editHref = (id: string): string => paths.contact.details(id);

  return (
    <TableCustom
      columns={TABLE_HEAD}
      data={_userList}
      tableToolbar
      actionButton="Contact"
      editHref={editHref}
    />
  );
}
