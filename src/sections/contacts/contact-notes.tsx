import {
  Box,
  Card,
  Avatar,
  Button,
  CardHeader,
  IconButton,
  Typography,
  CardContent,
} from '@mui/material';

import { _mock } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

const notesData = [
  {
    id: 1,
    name: 'Darlee Robertson',
    avatar: _mock.image.avatar(1),
    subheader: '15 Sep 2023, 12:10 pm',
    noteTitle: 'Notes added by Antony',
    noteContent: `A project review evaluates the success of an initiative and identifies areas for improvement.
      It can also evaluate a current project to determine whether it's on the right track.
      Or, it can determine the success of a completed project.`,
    attachments: [
      { name: 'Project Specs.xls', icon: 'material-symbols:download' },
      { name: '090224.jpg', icon: 'material-symbols:download' },
    ],
  },
  {
    id: 2,
    name: 'Darlee Robertson',
    avatar: _mock.image.avatar(2),
    subheader: '15 Sep 2023, 12:10 pm',
    noteTitle: 'Notes added by Antony',
    noteContent: `A project review evaluates the success of an initiative and identifies areas for improvement.
      It can also evaluate a current project to determine whether it's on the right track.
      Or, it can determine the success of a completed project.`,
    attachments: [
      { name: 'Project Specs.xls', icon: 'material-symbols:download' },
      { name: '090224.jpg', icon: 'material-symbols:download' },
    ],
  },
  {
    id: 3,
    name: 'Darlee Robertson',
    avatar: _mock.image.avatar(3),
    subheader: '15 Sep 2023, 12:10 pm',
    noteTitle: 'Notes added by Antony',
    noteContent: `A project review evaluates the success of an initiative and identifies areas for improvement.
      It can also evaluate a current project to determine whether it's on the right track.
      Or, it can determine the success of a completed project.`,
    attachments: [
      { name: 'Project Specs.xls', icon: 'material-symbols:download' },
      { name: '090224.jpg', icon: 'material-symbols:download' },
    ],
  },
];

export function ContactNotes() {
  return (
    <>
      {notesData.map((note) => (
        <Card key={note.id} sx={{ margin: 2 }}>
          <CardHeader
            avatar={
              note.avatar ? (
                <Avatar alt={note.name} src={note.avatar} />
              ) : (
                <Avatar sx={{ bgcolor: 'red' }}>{note.name.charAt(0)}</Avatar>
              )
            }
            action={
              <IconButton aria-label="settings">
                <Iconify
                  width="var(--icon-size-base)"
                  icon="material-symbols:more-vert"
                  sx={{ mr: 2 }}
                />
              </IconButton>
            }
            title={note.name}
            subheader={note.subheader}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {note.noteTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {note.noteContent}
            </Typography>
            <Box display="flex" gap={2} my={2}>
              {note.attachments.map((attachment, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={0.5}
                  sx={{
                    border: '1px solid #ddd',
                    borderRadius: 2,
                    width: 'auto',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="body2" fontWeight={600}>
                    {attachment.name}
                  </Typography>
                  <IconButton>
                    <Iconify icon={attachment.icon} />
                  </IconButton>
                </Box>
              ))}
            </Box>
            <Button variant="text" color="primary">
              Add Comment
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
