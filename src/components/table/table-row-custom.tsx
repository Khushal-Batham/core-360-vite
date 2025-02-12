import type { IUserItem, AccountList, TicketsList } from 'src/types/user';

import { useState } from 'react';
import { useBoolean } from 'minimal-shared/hooks';

import Link from '@mui/material/Link';
import {
  Box,
  Stack,
  Button,
  Avatar,
  Tooltip,
  TableRow,
  Checkbox,
  TableCell,
  IconButton,
} from '@mui/material';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';

import type { TableHeadCellProps } from './table-head-custom';

// ----------------------------------------------------------------------

type Props = {
  rows: AccountList[] | TicketsList[] | IUserItem[];
  table: any;
  editHref: (id: string) => string;
  onDeleteRow: (id: string) => void;
  headCells: TableHeadCellProps[];
};

export function TableRowCustom({ rows, table, editHref, onDeleteRow, headCells }: Props) {
  const confirmDialog = useBoolean();
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);

  const handleDeleteClick = (rowId: string) => {
    setSelectedRowId(rowId);
    confirmDialog.onTrue();
  };

  const renderConfirmDialog = () => (
    <ConfirmDialog
      open={confirmDialog.value}
      onClose={() => {
        confirmDialog.onFalse();
        setSelectedRowId(null);
      }}
      title="Delete"
      content="Are you sure you want to delete this account?"
      action={
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            if (selectedRowId) {
              onDeleteRow(selectedRowId);
              confirmDialog.onFalse();
              setSelectedRowId(null);
            }
          }}
        >
          Delete
        </Button>
      }
    />
  );

  return (
    <>
      {rows
        .slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage)
        .map((row, index) => (
          <TableRow key={row.id || index} selected={table.selected.includes(row.id)}>
            <TableCell padding="checkbox">
              <Checkbox
                checked={table.selected.includes(row.id)}
                onClick={() => table.onSelectRow(row.id)}
                inputProps={{
                  id: `${row.id}-checkbox`,
                  'aria-label': `${row.id} checkbox`,
                }}
              />
            </TableCell>

            {headCells.map((headCell) => {
              const key = headCell.id;
              const value = (row as Record<string, any>)[key];

              if (key === 'name') {
                return (
                  <TableCell key={key}>
                    <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                      <Avatar alt={String(value)} src={'avatarUrl' in row ? row.avatarUrl : ''} />
                      <Stack
                        sx={{ typography: 'body2', flex: '1 1 auto', alignItems: 'flex-start' }}
                      >
                        <Link
                          component={RouterLink}
                          href={editHref(row.id)}
                          color="inherit"
                          sx={{ cursor: 'pointer' }}
                        >
                          {value}
                        </Link>
                      </Stack>
                    </Box>
                  </TableCell>
                );
              }

              if (key === 'account_name') {
                return (
                  <TableCell key={key}>
                    <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                      <Stack
                        sx={{ typography: 'body2', flex: '1 1 auto', alignItems: 'flex-start' }}
                      >
                        <Link
                          component={RouterLink}
                          href={editHref(row.id)}
                          color="inherit"
                          sx={{ cursor: 'pointer' }}
                        >
                          {value}
                        </Link>
                      </Stack>
                    </Box>
                  </TableCell>
                );
              }

              if (key === 'action') {
                return (
                  <TableCell key={key} align="center">
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 0.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Tooltip title="Edit">
                        <IconButton component={RouterLink} href={editHref(row.id)}>
                          <Iconify icon="solar:pen-bold" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Delete">
                        <IconButton color="error" onClick={() => handleDeleteClick(row.id)}>
                          <Iconify icon="solar:trash-bin-trash-bold" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                );
              }

              return <TableCell key={key}>{value}</TableCell>;
            })}
          </TableRow>
        ))}
      {renderConfirmDialog()}
    </>
  );
}
