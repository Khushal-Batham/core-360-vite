import type { AccountList } from 'src/types/user';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import { Tab, Tabs, Button, Avatar, Typography } from '@mui/material';

import { RouterLink } from 'src/routes/components';
import { usePathname, useSearchParams } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';
import { DetailsPageCommon } from 'src/components/details/details';

import { Counter } from './Counter';
import { ContactList } from './contact-list';
import { AccountTicketsList } from './account-tickets';

type Props = {
  currentUser?: AccountList;
};

export function AccountDetails({ currentUser }: Props) {
  const NAV_ITEMS = [
    {
      value: '',
      label: 'Tickets List',
      icon: <Iconify width="var(--icon-size-base)" icon="mdi:ticket-confirmation" />,
    },
    {
      value: 'contact_list',
      label: 'Contact list',
      icon: <Iconify width="var(--icon-size-base)" icon="mdi:account-box-multiple" />,
    },
    {
      value: 'counter',
      label: 'Counter test redux',
      icon: <Iconify width="var(--icon-size-base)" icon="mdi:account-box-multiple" />,
    },
  ];
  const TAB_PARAM = 'tab';

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createRedirectPath = (currentPath: string, query: string) => {
    const queryString = new URLSearchParams({ [TAB_PARAM]: query }).toString();
    return query ? `${currentPath}?${queryString}` : currentPath;
  };

  const selectedTab = searchParams.get(TAB_PARAM) ?? '';

  const businessTypeIcons = {
    enterprise: 'mdi:domain',
    smb: 'mdi:storefront',
    startup: 'mdi:rocket-launch',
  };

  return (
    <Grid container spacing={3} sx={{ my: 1 }}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Box sx={{ position: 'sticky', top: '0' }}>
          <Card sx={{ pt: 2, pb: 5, px: 3 }}>
            <Box>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar
                  alt={currentUser?.account_name}
                  sx={{
                    width: 144,
                    height: 144,
                  }}
                />
              </Box>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                {currentUser?.account_name}
              </Typography>
            </Box>
            {currentUser && (
              <Stack spacing={2} sx={{ p: 3, typography: 'body2' }}>
                <Box sx={{ display: 'flex' }}>
                  <Iconify width="var(--icon-size-base)" icon="mdi:shield-account" sx={{ mr: 2 }} />
                  {currentUser.owner}
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Iconify
                    width="var(--icon-size-base)"
                    icon={`${businessTypeIcons[currentUser.type?.toLowerCase() as keyof typeof businessTypeIcons]}`}
                    sx={{ mr: 2 }}
                  />
                  {currentUser.type}
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Iconify width="var(--icon-size-base)" icon="ic:round-phone" sx={{ mr: 2 }} />
                  {currentUser.contact_number}
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
                  <Iconify width="var(--icon-size-base)" icon="mdi:web" sx={{ mr: 2 }} />
                  {currentUser.website}
                </Box>

                <Box sx={{ display: 'flex' }}>
                  <Iconify
                    width="var(--icon-size-base)"
                    icon="mingcute:location-fill"
                    sx={{ mr: 2 }}
                  />
                  {currentUser.address}
                </Box>
              </Stack>
            )}

            {currentUser && (
              <Stack sx={{ mt: 3, alignItems: 'center', justifyContent: 'center' }}>
                <Button variant="soft" color="error">
                  Delete Account
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
              // justifyContent: { xs: 'center' },
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
            <DetailsPageCommon heading="" components={<AccountTicketsList />} />
          )}
          {selectedTab === 'contact_list' && (
            <DetailsPageCommon heading="" components={<ContactList />} />
          )}
          {selectedTab === 'counter' && <Counter />}
        </Card>
      </Grid>
    </Grid>
  );
}
