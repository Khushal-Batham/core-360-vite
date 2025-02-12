import type { IUserItem } from 'src/types/user';

import { z as zod } from 'zod';
import { isValidPhoneNumber } from 'react-phone-number-input/input';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import { Tab, Tabs, Avatar, Button, Typography } from '@mui/material';

import { RouterLink } from 'src/routes/components';
import { usePathname, useSearchParams } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';
import { schemaHelper } from 'src/components/hook-form';
import { DetailsPageCommon } from 'src/components/details/details';

import { ContactTicketsList } from './contact-tickets';

// ----------------------------------------------------------------------

export type NewUserSchemaType = zod.infer<typeof NewUserSchema>;

export const NewUserSchema = zod.object({
  avatarUrl: schemaHelper.file({ message: 'Avatar is required!' }),
  name: zod.string().min(1, { message: 'Name is required!' }),
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  phoneNumber: schemaHelper.phoneNumber({ isValid: isValidPhoneNumber }),
  country: schemaHelper.nullableInput(zod.string().min(1, { message: 'Country is required!' }), {
    // message for null value
    message: 'Country is required!',
  }),
  address: zod.string().min(1, { message: 'Address is required!' }),
  company: zod.string().min(1, { message: 'Company is required!' }),
  state: zod.string().min(1, { message: 'State is required!' }),
  city: zod.string().min(1, { message: 'City is required!' }),
  role: zod.string().min(1, { message: 'Role is required!' }),
  zipCode: zod.string().min(1, { message: 'Zip code is required!' }),
  // Not required
  status: zod.string(),
  isVerified: zod.boolean(),
});

// ----------------------------------------------------------------------

type Props = {
  currentUser?: IUserItem;
};

export function ContactDetails({ currentUser }: Props) {
  const NAV_ITEMS = [
    {
      value: '',
      label: 'Tickets List',
      icon: <Iconify width="var(--icon-size-base)" icon="mdi:ticket-confirmation" />,
    },
    // {
    //   value: 'Activities',
    //   label: 'Activities',
    //   icon: <Iconify width="var(--icon-size-base)" icon="mdi:calendar-check" />,
    // },
    // {
    //   value: 'notes',
    //   label: 'Notes',
    //   icon: <Iconify width="var(--icon-size-base)" icon="fluent:note-24-filled" />,
    // },
    // {
    //   value: 'calls',
    //   label: 'Calls',
    //   icon: <Iconify width="var(--icon-size-base)" icon="fluent:call-24-filled" />,
    // },
    // {
    //   value: 'email',
    //   label: 'Email',
    //   icon: <Iconify width="var(--icon-size-base)" icon="mdi:email" />,
    // },
    // {
    //   value: 'whatsapp',
    //   label: 'WhatsApp',
    //   icon: <Iconify width="var(--icon-size-base)" icon="akar-icons:whatsapp-fill" />,
    // },
  ];
  const TAB_PARAM = 'tab';

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createRedirectPath = (currentPath: string, query: string) => {
    const queryString = new URLSearchParams({ [TAB_PARAM]: query }).toString();
    return query ? `${currentPath}?${queryString}` : currentPath;
  };

  const selectedTab = searchParams.get(TAB_PARAM) ?? '';

  return (
    <Grid container spacing={3} sx={{ my: 1 }}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Box sx={{ position: 'sticky', top: '0' }}>
          <Card sx={{ pt: 2, pb: 5, px: 3 }}>
            <Box>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar
                  alt={currentUser?.name}
                  src={currentUser?.avatarUrl}
                  sx={{
                    width: 144,
                    height: 144,
                  }}
                />
              </Box>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                {currentUser?.name}
              </Typography>
            </Box>
            {currentUser && (
              <Stack spacing={2} sx={{ p: 3, typography: 'body2' }}>
                <Box sx={{ display: 'flex' }}>
                  <Iconify width="var(--icon-size-base)" icon="ic:round-phone" sx={{ mr: 2 }} />
                  {currentUser.phoneNumber}
                </Box>

                <Box sx={{ display: 'flex' }}>
                  <Iconify
                    width="var(--icon-size-base)"
                    icon="fluent:mail-24-filled"
                    sx={{ mr: 2 }}
                  />
                  {currentUser.email}
                </Box>

                <Box sx={{ display: 'flex' }}>
                  <Iconify
                    width="var(--icon-size-base)"
                    icon="ic:round-business-center"
                    sx={{ mr: 2 }}
                  />
                  {currentUser.company}
                </Box>

                <Box sx={{ display: 'flex' }}>
                  <Iconify
                    width="var(--icon-size-base)"
                    icon="mingcute:location-fill"
                    sx={{ mr: 2 }}
                  />
                  {currentUser.address},&nbsp;
                  {currentUser.city},&nbsp;
                  {currentUser.state},&nbsp;
                  {currentUser.country}
                </Box>
              </Stack>
            )}

            {currentUser && (
              <Stack sx={{ mt: 3, alignItems: 'center', justifyContent: 'center' }}>
                <Button variant="soft" color="error">
                  Delete user
                </Button>
              </Stack>
            )}
          </Card>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 9 }}>
        <Card sx={{ p: 3 }}>
          <Box
            sx={{
              width: 1,
              bottom: 0,
              zIndex: 9,
              px: { md: 3 },
              display: 'flex',
              position: 'absolute',
              bgcolor: 'background.paper',
            }}
          >
            <Tabs value={selectedTab}>
              {NAV_ITEMS.map((tab) => (
                <Tab
                  component={RouterLink}
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={tab.label}
                  href={createRedirectPath(pathname, tab.value)}
                />
              ))}
            </Tabs>
          </Box>
        </Card>
        <Card sx={{ my: 2, maxHeight: 'calc(100vh - 275px)', overflowY: 'auto' }}>
          {selectedTab === '' && (
            <DetailsPageCommon
              heading="Tickets List"
              breadcrumbsLink={[]}
              components={<ContactTicketsList />}
            />
          )}

          {/* {selectedTab === 'Activities' && (
            <DetailsPageCommon
              heading="Activities"
              breadcrumbsLink={[]}
              components={<ContactActivities />}
            />
          )}

          {selectedTab === 'notes' && (
            <DetailsPageCommon
              heading="Notes"
              breadcrumbsLink={[]}
              action={
                <Button variant="contained" startIcon={<Iconify icon="mingcute:add-line" />}>
                  New Notes
                </Button>
              }
              components={<ContactNotes />}
            />
          )}
          {selectedTab === 'calls' && (
            <DetailsPageCommon heading="Email" breadcrumbsLink={[]} components={<ContactCalls />} />
          )}
          {selectedTab === 'email' && (
            <DetailsPageCommon heading="Email" breadcrumbsLink={[]} components={<ContactEmail />} />
          )}

          {selectedTab === 'whatsapp' && (
            <DetailsPageCommon heading="Whatsapp" breadcrumbsLink={[]} components={<ContactWhatsapp />} />
          )} */}
        </Card>
      </Grid>
    </Grid>
  );
}
