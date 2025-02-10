import { Box, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ContactActivities() {
  return (
    <Box sx={{ my: 2 }}>
      {/* Date Block */}
      <Box>
        <Box
          display="flex"
          alignItems="center"
          bgcolor="#f0f0f0" // Light background color
          padding="8px"
          borderRadius="8px"
          width={120}
          sx={{ textAlign: 'center' }}
        >
          <Iconify
            width="var(--icon-size-small)"
            icon="ic:round-calendar-today" // Calendar icon
            sx={{ mr: 0.5 }} // Icon margin
          />
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            06-02-2025
          </Typography>
        </Box>
      </Box>

      {/* Message Block */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          my: 2,
          padding: '8px 10px',
          borderRadius: '4px',
          border: 'var(--base-border)',
        }}
      >
        <Iconify width="var(--icon-size-base)" icon="ic:round-message" sx={{ mr: 2 }} />
        <Box>
          <Typography>You sent 1 message to the contact.</Typography>
          <Typography variant="body2">10:25</Typography>
        </Box>
      </Box>

      {/* Call Block */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          my: 2,
          padding: '8px 10px',
          borderRadius: '4px',
          border: 'var(--base-border)',
        }}
      >
        <Iconify width="var(--icon-size-base)" icon="ic:round-phone" sx={{ mr: 2 }} />
        <Box>
          <Typography>
            Denwar responded to your appointment schedule question by call at 09:30 PM.
          </Typography>
          <Typography variant="body2">09:30</Typography>
        </Box>
      </Box>

      {/* Notes Block */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          my: 2,
          padding: '8px 10px',
          borderRadius: '4px',
          border: 'var(--base-border)',
        }}
      >
        <Iconify width="var(--icon-size-base)" icon="fluent:note-24-filled" sx={{ mr: 2 }} />
        <Box>
          <Typography>Notes added by Antony</Typography>
          <Typography variant="body2">
            {` Please accept my apologies for the inconvenience caused. It would be much appreciated if
            it's possible to reschedule to 6:00 PM, or any other day that week.`}
          </Typography>
          <Typography variant="body2">10:00 PM</Typography>
        </Box>
      </Box>

      {/* Another Date Block */}
      <Box
        display="flex"
        alignItems="center"
        bgcolor="#f0f0f0" // Light background color
        padding="8px"
        borderRadius="8px"
        width={120}
        sx={{ textAlign: 'center' }}
      >
        <Iconify
          width="var(--icon-size-small)"
          icon="ic:round-calendar-today" // Calendar icon
          sx={{ mr: 0.5 }} // Icon margin
        />
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          05-02-2025
        </Typography>
      </Box>

      {/* WhatsApp Message Block */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          my: 2,
          padding: '8px 10px',
          borderRadius: '4px',
          border: 'var(--base-border)',
        }}
      >
        <Iconify width="var(--icon-size-base)" icon="akar-icons:whatsapp-fill" sx={{ mr: 2 }} />
        <Box>
          <Typography>This is a WhatsApp message</Typography>
          <Typography variant="body2">10:00 PM</Typography>
        </Box>
      </Box>

      {/* Email Message Block */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          my: 2,
          padding: '8px 10px',
          borderRadius: '4px',
          border: 'var(--base-border)',
        }}
      >
        <Iconify width="var(--icon-size-base)" icon="mdi:email" sx={{ mr: 2 }} />
        <Box>
          <Typography>This is an email</Typography>
          <Typography variant="body2">11:00 PM</Typography>
        </Box>
      </Box>
    </Box>
  );
}
