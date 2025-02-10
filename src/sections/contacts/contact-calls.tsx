import * as React from 'react';

import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Menu from '@mui/material/Menu';
import Tabs from '@mui/material/Tabs';
import Avatar from '@mui/material/Avatar';
import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import { _mock } from 'src/_mock';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
}));

interface CallLog {
  name: string;
  date: string;
  time: string;
  status: 'Busy' | 'No Answer';
  type: 'Incoming' | 'Outgoing' | 'Missed';
  avatar: string;
}

const callLogs: CallLog[] = [
  {
    name: 'Darlee Robertson',
    date: '23 Jul 2023',
    time: '10:00 pm',
    status: 'Busy',
    type: 'Incoming',
    avatar: _mock.image.avatar(1),
  },
  {
    name: 'Sharon Roy',
    date: '28 Jul 2023',
    time: '09:00 pm',
    status: 'No Answer',
    type: 'Outgoing',
    avatar: _mock.image.avatar(2),
  },
  {
    name: 'Vaughan',
    date: '30 Jul 2023',
    time: '08:00 pm',
    status: 'No Answer',
    type: 'Missed',
    avatar: _mock.image.avatar(3),
  },
  {
    name: 'Vaughan',
    date: '30 Jul 2023',
    time: '08:00 pm',
    status: 'No Answer',
    type: 'Missed',
    avatar: _mock.image.avatar(4),
  },
  {
    name: 'Vaughan',
    date: '30 Jul 2023',
    time: '08:00 pm',
    status: 'No Answer',
    type: 'Missed',
    avatar: _mock.image.avatar(5),
  },
  {
    name: 'Vaughan',
    date: '30 Jul 2023',
    time: '08:00 pm',
    status: 'No Answer',
    type: 'Missed',
    avatar: _mock.image.avatar(6),
  },
  {
    name: 'Vaughan',
    date: '30 Jul 2023',
    time: '08:00 pm',
    status: 'No Answer',
    type: 'Missed',
    avatar: _mock.image.avatar(7),
  },
  {
    name: 'Vaughan',
    date: '30 Jul 2023',
    time: '08:00 pm',
    status: 'No Answer',
    type: 'Missed',
    avatar: _mock.image.avatar(8),
  },
  {
    name: 'Vaughan',
    date: '30 Jul 2023',
    time: '08:00 pm',
    status: 'No Answer',
    type: 'Missed',
    avatar: _mock.image.avatar(9),
  },
  {
    name: 'Vaughan',
    date: '30 Jul 2023',
    time: '08:00 pm',
    status: 'No Answer',
    type: 'Missed',
    avatar: _mock.image.avatar(10),
  },
];

const CallLogCard: React.FC<{ callLog: CallLog }> = ({ callLog }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledCard sx={{ padding: '10px 0' }}>
      <CardHeader
        avatar={
          callLog.avatar ? (
            <Avatar alt={callLog.name} src={callLog.avatar} />
          ) : (
            <Avatar sx={{ bgcolor: 'red' }}>{callLog.name.charAt(0)}</Avatar>
          )
        }
        action={
          <>
            <Label sx={{ margin: '0 5px' }}>Type: {callLog.type} call</Label>
            <Label color={callLog.status === 'Busy' ? 'primary' : 'error'}>
              Status: {callLog.status}
            </Label>
            <IconButton aria-label="settings" onClick={handleClick}>
              <Iconify
                width="var(--icon-size-base)"
                icon="material-symbols:more-vert"
                sx={{ mr: 2 }}
              />
            </IconButton>
          </>
        }
        title={callLog.name}
        subheader={`${callLog.date} at ${callLog.time}`}
      />

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </StyledCard>
  );
};

export function ContactCalls() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 5;

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    setPage(1);
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const filteredLogs = React.useMemo(() => {
    let logs = callLogs;
    switch (selectedTab) {
      case 1:
        logs = callLogs.filter((log) => log.type === 'Incoming');
        break;
      case 2:
        logs = callLogs.filter((log) => log.type === 'Outgoing');
        break;
      case 3:
        logs = callLogs.filter((log) => log.type === 'Missed');
        break;
      default:
        break;
    }
    return logs;
  }, [selectedTab]);

  const paginatedLogs = React.useMemo(
    () => filteredLogs.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    [filteredLogs, page]
  );

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange} scrollButtons="auto">
        <Tab label="All" />
        <Tab label="Incoming Calls" />
        <Tab label="Outgoing Calls" />
        <Tab label="Missed Calls" />
      </Tabs>
      {paginatedLogs.map((log, index) => (
        <CallLogCard key={index} callLog={log} />
      ))}
      <Pagination
        count={Math.ceil(filteredLogs.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
      />
    </div>
  );
}
