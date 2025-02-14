import type { TableHeadCellProps } from 'src/components/table';
import type { IUserItem, TicketsList, AccountList, IUserTableFilters } from 'src/types/user';

import { useState, useCallback } from 'react';
import { useBoolean, useSetState } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Tooltip from '@mui/material/Tooltip';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import {
  useTable,
  emptyRows,
  rowInPage,
  TableNoData,
  getComparator,
  TableEmptyRows,
  TableRowCustom,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';

import { TableToolbar } from './table-toolbar';

type TableCustomProps = {
  columns: TableHeadCellProps[];
  data: TicketsList[] | IUserItem[] | AccountList[];
  tableToolbar?: boolean;
  actionButton?: string;
  editHref: (id: string) => string;
};

interface Filters {
  [key: string]: string;
}

export function TableCustom({
  columns,
  data,
  tableToolbar,
  actionButton = '',
  editHref,
}: TableCustomProps) {
  const table = useTable({ defaultDense: true, defaultRowsPerPage: 10 });

  const confirmDialog = useBoolean();

  const [tableData, setTableData] = useState<TableCustomProps['data']>(data);

  const userFilters = useSetState<IUserTableFilters>({ name: '', role: [], status: 'all' });
  const { state: currentFilters, setState: updateFilters } = userFilters;

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters: currentFilters,
  });

  const dataInPage = rowInPage(
    dataFiltered.filter((item): item is TicketsList => 'subject' in item),
    table.page,
    table.rowsPerPage
  );

  const canReset =
    !!currentFilters.name || currentFilters.role.length > 0 || currentFilters.status !== 'all';

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleDeleteRow = useCallback(
    (id: string) => {
      const deleteRow = tableData.filter((row) => row.id !== id);

      toast.success('Delete success!');

      if (tableData.every((row) => 'subject' in row)) {
        setTableData(deleteRow as TicketsList[]);
      } else {
        setTableData(deleteRow as IUserItem[]);
      }

      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  // ===============================================================
  const [filters, setFilters] = useState<{ [key: string]: string }>({});

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    column: string
  ) => {
    const value = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: value,
    }));

    // Apply filtering
    const newFilters = {
      ...filters,
      [column]: value,
    };

    setFilters(newFilters);

    if (value === '') {
      setTableData(data);
    } else {
      const filteredData = data.filter((row) =>
        Object.keys(newFilters).every((key) => {
          const cellValue = (row as any)[key as keyof typeof row]?.toString().toLowerCase();
          return cellValue?.includes(
            key === column ? value.toLowerCase() : newFilters[key].toLowerCase()
          );
        })
      );

      if (data.every((row) => 'subject' in row)) {
        setTableData(filteredData as TicketsList[]);
      } else if (data.every((row) => 'status' in row)) {
        setTableData(filteredData as IUserItem[]);
      } else {
        setTableData(filteredData as AccountList[]);
      }
    }
  };
  // ===============================================================

  return (
    <Card sx={{ m: 1 }}>
      {tableToolbar && (
        <TableToolbar
          filters={userFilters}
          onResetPage={table.onResetPage}
          options={{ roles: [] }}
          actionButtonLabel={actionButton}
        />
      )}
      <Box sx={{ position: 'relative' }}>
        <TableSelectedAction
          dense={table.dense}
          numSelected={table.selected.length}
          rowCount={dataFiltered.length}
          onSelectAllRows={(checked) =>
            table.onSelectAllRows(
              checked,
              dataFiltered.map((row) => row.id)
            )
          }
          action={
            <Tooltip title="Delete">
              <IconButton color="primary" onClick={confirmDialog.onTrue}>
                <Iconify icon="solar:trash-bin-trash-bold" />
              </IconButton>
            </Tooltip>
          }
        />

        <Scrollbar>
          <Table size={table.dense ? 'small' : 'medium'} sx={{ width: '100%' }}>
            <TableHeadCustom
              order={table.order}
              orderBy={table.orderBy}
              headCells={columns}
              rowCount={dataFiltered.length}
              numSelected={table.selected.length}
              onSort={table.onSort}
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  dataFiltered.map((row) => row.id)
                )
              }
              handleFilterChange={handleFilterChange}
            />
            <TableBody>
              <TableRowCustom
                rows={dataFiltered}
                table={table}
                editHref={editHref}
                onDeleteRow={handleDeleteRow}
                headCells={columns}
              />

              <TableEmptyRows
                height={table.dense ? 56 : 56 + 20}
                emptyRows={emptyRows(table.page, table.rowsPerPage, dataFiltered.length)}
              />

              <TableNoData notFound={notFound} />
            </TableBody>
          </Table>
        </Scrollbar>
      </Box>

      <TablePaginationCustom
        page={table.page}
        dense={table.dense}
        count={dataFiltered.length}
        rowsPerPage={table.rowsPerPage}
        onPageChange={table.onChangePage}
        onChangeDense={table.onChangeDense}
        onRowsPerPageChange={table.onChangeRowsPerPage}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

type ApplyFilterProps = {
  inputData: TicketsList[] | IUserItem[] | AccountList[];
  filters: IUserTableFilters;
  comparator: (a: any, b: any) => number;
};

function applyFilter({ inputData, comparator, filters }: ApplyFilterProps) {
  const { name, status, role } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]) as TicketsList[] | IUserItem[] | AccountList[];

  if (status !== 'all') {
    if (inputData.length && 'status' in inputData[0]) {
      inputData = (inputData as IUserItem[]).filter((user) => user.status === status);
    }
  }

  return inputData;
}
