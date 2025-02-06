import type { IUserItem } from 'src/types/user';

import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { isValidPhoneNumber } from 'react-phone-number-input/input';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import { Tab, Tabs, Avatar, Button, CardHeader } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useRouter, usePathname, useSearchParams } from 'src/routes/hooks';

import { Label } from 'src/components/label';
import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';
import { Form, schemaHelper } from 'src/components/hook-form';

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

export function UserNewEditForm({ currentUser }: Props) {
  console.log('🚀 ~ UserNewEditForm ~ currentUser:', currentUser);
  const router = useRouter();

  const defaultValues: NewUserSchemaType = {
    status: '',
    avatarUrl: null,
    isVerified: true,
    name: '',
    email: '',
    phoneNumber: '',
    country: '',
    state: '',
    city: '',
    address: '',
    zipCode: '',
    company: '',
    role: '',
  };

  const methods = useForm<NewUserSchemaType>({
    mode: 'onSubmit',
    resolver: zodResolver(NewUserSchema),
    defaultValues,
    values: currentUser,
  });

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      toast.success(currentUser ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.contacts.list);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const NAV_ITEMS = [
    {
      value: 'activities',
      label: 'Activities',
      icon: <Iconify width={24} icon="mdi:calendar-check" />,
    },
    {
      value: 'notes',
      label: 'Notes',
      icon: <Iconify width={24} icon="fluent:note-24-filled" />,
    },
    {
      value: 'calls',
      label: 'Calls',
      icon: <Iconify width={24} icon="fluent:call-24-filled" />,
    },
    {
      value: 'email',
      label: 'Email',
      icon: <Iconify width={24} icon="mdi:email" />,
    },
    {
      value: 'whatsapp',
      label: 'WhatsApp',
      icon: <Iconify width={24} icon="akar-icons:whatsapp-fill" />,
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

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ pt: 10, pb: 5, px: 3 }}>
            {currentUser && (
              <Label
                color={
                  (values.status === 'active' && 'success') ||
                  (values.status === 'banned' && 'error') ||
                  'warning'
                }
                sx={{ position: 'absolute', top: 24, right: 24 }}
              >
                {values.status}
              </Label>
            )}

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

            {currentUser && (
              <>
                <CardHeader title="About" />

                <Stack spacing={2} sx={{ p: 3, typography: 'body2' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Iconify width={24} icon="ic:round-person" sx={{ mr: 2 }} />
                    {currentUser.name}
                  </Box>

                  <Box sx={{ display: 'flex' }}>
                    <Iconify width={24} icon="ic:round-phone" sx={{ mr: 2 }} />
                    {currentUser.phoneNumber}
                  </Box>

                  <Box sx={{ display: 'flex' }}>
                    <Iconify width={24} icon="fluent:mail-24-filled" sx={{ mr: 2 }} />
                    {currentUser.email}
                  </Box>

                  <Box sx={{ display: 'flex' }}>
                    <Iconify width={24} icon="ic:round-business-center" sx={{ mr: 2 }} />
                    {currentUser.company}
                  </Box>

                  <Box sx={{ display: 'flex' }}>
                    <Iconify width={24} icon="mingcute:location-fill" sx={{ mr: 2 }} />
                    Live at &nbsp;{currentUser.country}
                  </Box>
                </Stack>
              </>
            )}

            {currentUser && (
              <Stack sx={{ mt: 3, alignItems: 'center', justifyContent: 'center' }}>
                <Button variant="soft" color="error">
                  Delete user
                </Button>
              </Stack>
            )}
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
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
          <Card sx={{ my: 2 }}>
            {selectedTab === 'activities' && 'Activities'}

            {selectedTab === 'notes' && <Box>{selectedTab}</Box>}

            {selectedTab === 'calls' && <Box>{selectedTab}</Box>}

            {selectedTab === 'email' && <Box>{selectedTab}</Box>}
            {selectedTab === 'whatsapp' && <Box>{selectedTab}</Box>}
          </Card>
        </Grid>
      </Grid>
    </Form>
  );
}
