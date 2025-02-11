import * as React from 'react';

import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

import { _mock } from 'src/_mock';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
}));

interface Message {
  sender: string;
  time: string;
  content: string;
  type: 'Sent' | 'Received';
  avatar: string;
}

const messages: Message[] = [
  {
    sender: 'Alice',
    time: '10:30 AM',
    content: 'Hey, how are you?',
    type: 'Received',
    avatar: _mock.image.avatar(1),
  },
  {
    sender: 'You',
    time: '10:32 AM',
    content: 'I am good, thanks!',
    type: 'Sent',
    avatar: _mock.image.avatar(2),
  },
  {
    sender: 'Bob',
    time: '11:00 AM',
    content: 'Meeting at 2 PM.',
    type: 'Received',
    avatar: _mock.image.avatar(3),
  },
  {
    sender: 'Alice',
    time: '10:30 AM',
    content: 'Hey, how are you?',
    type: 'Received',
    avatar: _mock.image.avatar(1),
  },
  {
    sender: 'You',
    time: '10:32 AM',
    content: 'I am good, thanks!',
    type: 'Sent',
    avatar: _mock.image.avatar(2),
  },
  {
    sender: 'Bob',
    time: '11:00 AM',
    content: 'Meeting at 2 PM.',
    type: 'Received',
    avatar: _mock.image.avatar(3),
  },
  {
    sender: 'Alice',
    time: '10:30 AM',
    content: 'Hey, how are you?',
    type: 'Received',
    avatar: _mock.image.avatar(1),
  },
  {
    sender: 'You',
    time: '10:32 AM',
    content: 'I am good, thanks!',
    type: 'Sent',
    avatar: _mock.image.avatar(2),
  },
  {
    sender: 'Bob',
    time: '11:00 AM',
    content: 'Meeting at 2 PM.',
    type: 'Received',
    avatar: _mock.image.avatar(3),
  },
  {
    sender: 'Alice',
    time: '10:30 AM',
    content: 'Hey, how are you?',
    type: 'Received',
    avatar: _mock.image.avatar(1),
  },
  {
    sender: 'You',
    time: '10:32 AM',
    content: 'I am good, thanks!',
    type: 'Sent',
    avatar: _mock.image.avatar(2),
  },
  {
    sender: 'Bob',
    time: '11:00 AM',
    content: 'Meeting at 2 PM.',
    type: 'Received',
    avatar: _mock.image.avatar(3),
  },
];

const MessageCard: React.FC<{ message: Message }> = ({ message }) => (
  <StyledCard sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
    <Avatar alt={message.sender} src={message.avatar} sx={{ width: 32, height: 32, mr: 1 }} />
    <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 1 }}>
      {message.sender}
    </Typography>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ flexGrow: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
    >
      {message.content}
    </Typography>
    <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
      {message.time}
    </Typography>
  </StyledCard>
);

export function ContactWhatsapp() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 10;

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    setPage(1);
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const filteredMessages = React.useMemo(() => {
    switch (selectedTab) {
      case 1:
        return messages.filter((msg) => msg.type === 'Received');
      case 2:
        return messages.filter((msg) => msg.type === 'Sent');
      default:
        return messages;
    }
  }, [selectedTab]);

  const paginatedMessages = React.useMemo(
    () => filteredMessages.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    [filteredMessages, page]
  );

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="All Messages" />
        <Tab label="Received" />
        <Tab label="Sent" />
      </Tabs>
      {paginatedMessages.map((msg, index) => (
        <MessageCard key={index} message={msg} />
      ))}
      <Pagination
        count={Math.ceil(filteredMessages.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
      />
    </div>
  );
}
