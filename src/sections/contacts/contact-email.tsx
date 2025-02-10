import React from 'react';

import {
  Box,
  Card,
  List,
  Avatar,
  Tooltip,
  ListItem,
  Typography,
  IconButton,
  CardContent,
  ListItemText,
  ListItemAvatar,
} from '@mui/material';

import { _mock } from 'src/_mock';

const ContactEmail: React.FC = () => {
  const emails = [
    {
      id: 1,
      sender: 'John Doe',
      subject: 'Meeting Reminder',
      time: '10:30 AM',
      preview: "Don't forget our meeting at 2 PM today...",
      avatar: _mock.image.avatar(1),
    },
    {
      id: 2,
      sender: 'Alice Smith',
      subject: 'Project Update',
      time: '11:00 AM',
      preview: 'The latest project updates have been shared...',
      avatar: _mock.image.avatar(2),
    },
    {
      id: 3,
      sender: 'Bob Johnson',
      subject: 'New Assignment',
      time: '12:15 PM',
      preview: 'You have been assigned a new task regarding...',
      avatar: _mock.image.avatar(3),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      {emails.map((email) => (
        <Card sx={{ boxShadow: 3, borderRadius: 2, margin: '10px 0' }} key={email.id}>
          <CardContent>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt={email.sender} src={email.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={email.sender}
                  secondary={
                    <>
                      <Typography variant="subtitle2" color="text.primary">
                        {email.subject}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {email.preview}
                      </Typography>
                    </>
                  }
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ minWidth: '80px', textAlign: 'right' }}
                >
                  {email.time}
                </Typography>
                <Tooltip title="More options">
                  <IconButton>{/* <MoreVert /> */}</IconButton>
                </Tooltip>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ContactEmail;
