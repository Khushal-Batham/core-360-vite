import type { AccountList } from 'src/types/user';
import type { Theme, SxProps, CSSObject } from '@mui/material/styles';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import TableSortLabel from '@mui/material/TableSortLabel';

import { Iconify } from '../iconify';

const visuallyHidden: CSSObject = {
  border: 0,
  padding: 0,
  width: '1px',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
};

export type TableHeadCellProps = {
  id: string;
  label?: string;
  width?: CSSObject['width'];
  align?: 'left' | 'center' | 'right';
  sx?: SxProps<Theme>;
  filterable?: boolean;
};

export type TableHeadCustomProps = {
  orderBy?: string;
  rowCount?: number;
  sx?: SxProps<Theme>;
  numSelected?: number;
  order?: 'asc' | 'desc';
  headCells: TableHeadCellProps[];
  onSort?: (id: string) => void;
  onSelectAllRows?: (checked: boolean) => void;
  handleFilterChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    column: keyof AccountList
  ) => void;
};

export function TableHeadCustom({
  sx,
  order,
  onSort,
  orderBy,
  headCells,
  rowCount = 0,
  numSelected = 0,
  onSelectAllRows,
  handleFilterChange,
}: TableHeadCustomProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedColumn, setSelectedColumn] = useState<TableHeadCellProps | null>(null);
  const [filterValue, setFilterValue] = useState<string>('');

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>, column: TableHeadCellProps) => {
    if (selectedColumn?.id !== column.id) {
      setFilterValue('');
    }
    setSelectedColumn(column);
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleApplyFilter = () => {
    if (selectedColumn) {
      handleFilterChange(
        { target: { value: filterValue } } as React.ChangeEvent<HTMLInputElement>,
        selectedColumn?.id as keyof AccountList
      );
    }
    handleClosePopover();
  };

  return (
    <>
      <TableHead sx={sx}>
        <TableRow>
          {onSelectAllRows && (
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={(event) => onSelectAllRows(event.target.checked)}
                inputProps={{
                  id: 'all-row-checkbox',
                  'aria-label': 'Select all rows',
                }}
              />
            </TableCell>
          )}
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.align || 'left'}
              sortDirection={orderBy === headCell.id ? order : false}
              sx={{ width: headCell.width, ...headCell.sx }}
            >
              <Box display="flex" alignItems="center" justifyContent="left">
                {onSort ? (
                  <TableSortLabel
                    hideSortIcon
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={() => onSort(headCell.id)}
                  >
                    {headCell.label}
                    {orderBy === headCell.id && (
                      <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </Box>
                    )}
                  </TableSortLabel>
                ) : (
                  headCell.label
                )}
                {headCell.filterable && (
                  <IconButton
                    size="small"
                    sx={{ mx: 2 }}
                    onClick={(event) => handleOpenPopover(event, headCell)}
                  >
                    <Iconify icon="mdi:filter" />
                  </IconButton>
                )}
              </Box>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

      {/* Popover Filter Input */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ padding: '15px 10px 5px 10px' }} display="flex" flexDirection="column" gap={1}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder={`Filter ${selectedColumn?.label}`}
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <Box display="flex" justifyContent="flex-end" gap={1}>
            <Button size="small" onClick={handleClosePopover}>
              Cancel
            </Button>
            <Button size="small" onClick={handleApplyFilter}>
              Apply
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
}
