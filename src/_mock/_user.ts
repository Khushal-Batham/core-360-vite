import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const USER_STATUS_OPTIONS = [
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
  { value: 'banned', label: 'Banned' },
  { value: 'rejected', label: 'Rejected' },
];

export const _userAbout = {
  id: _mock.id(1),
  role: _mock.role(1),
  email: _mock.email(1),
  school: _mock.companyNames(2),
  company: _mock.companyNames(1),
  country: _mock.countryNames(2),
  coverUrl: _mock.image.cover(3),
  totalFollowers: _mock.number.nativeL(1),
  totalFollowing: _mock.number.nativeL(2),
  quote:
    'Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..',
  socialLinks: {
    facebook: `https://www.facebook.com/caitlyn.kerluke`,
    instagram: `https://www.instagram.com/caitlyn.kerluke`,
    linkedin: `https://www.linkedin.com/in/caitlyn.kerluke`,
    twitter: `https://www.twitter.com/caitlyn.kerluke`,
  },
};

export const _userFollowers = Array.from({ length: 18 }, (_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  country: _mock.countryNames(index),
  avatarUrl: _mock.image.avatar(index),
}));

export const _userFriends = Array.from({ length: 18 }, (_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
}));

export const _userGallery = Array.from({ length: 12 }, (_, index) => ({
  id: _mock.id(index),
  postedAt: _mock.time(index),
  title: _mock.postTitle(index),
  imageUrl: _mock.image.cover(index),
}));

export const _userFeeds = Array.from({ length: 3 }, (_, index) => ({
  id: _mock.id(index),
  createdAt: _mock.time(index),
  media: _mock.image.travel(index + 1),
  message: _mock.sentence(index),
  personLikes: Array.from({ length: 20 }, (__, personIndex) => ({
    name: _mock.fullName(personIndex),
    avatarUrl: _mock.image.avatar(personIndex + 2),
  })),
  comments: (index === 2 && []) || [
    {
      id: _mock.id(7),
      author: {
        id: _mock.id(8),
        avatarUrl: _mock.image.avatar(index + 5),
        name: _mock.fullName(index + 5),
      },
      createdAt: _mock.time(2),
      message: 'Praesent venenatis metus at',
    },
    {
      id: _mock.id(9),
      author: {
        id: _mock.id(10),
        avatarUrl: _mock.image.avatar(index + 6),
        name: _mock.fullName(index + 6),
      },
      createdAt: _mock.time(3),
      message:
        'Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.',
    },
  ],
}));

export const _userCards = Array.from({ length: 21 }, (_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.fullName(index),
  coverUrl: _mock.image.cover(index),
  avatarUrl: _mock.image.avatar(index),
  totalFollowers: _mock.number.nativeL(index),
  totalPosts: _mock.number.nativeL(index + 2),
  totalFollowing: _mock.number.nativeL(index + 1),
}));

export const _userPayment = Array.from({ length: 3 }, (_, index) => ({
  id: _mock.id(index),
  cardNumber: ['**** **** **** 1234', '**** **** **** 5678', '**** **** **** 7878'][index],
  cardType: ['mastercard', 'visa', 'visa'][index],
  primary: index === 1,
}));

export const _userAddressBook = Array.from({ length: 4 }, (_, index) => ({
  id: _mock.id(index),
  primary: index === 0,
  name: _mock.fullName(index),
  phoneNumber: _mock.phoneNumber(index),
  fullAddress: _mock.fullAddress(index),
  addressType: (index === 0 && 'Home') || 'Office',
}));

export const _userInvoices = Array.from({ length: 10 }, (_, index) => ({
  id: _mock.id(index),
  invoiceNumber: `INV-199${index}`,
  createdAt: _mock.time(index),
  price: _mock.number.price(index),
}));

export const _userPlans = [
  { subscription: 'basic', price: 0, primary: false },
  { subscription: 'starter', price: 4.99, primary: true },
  { subscription: 'premium', price: 9.99, primary: false },
];

export const _userList = Array.from({ length: 20 }, (_, index) => ({
  id: _mock.id(index),
  zipCode: '85807',
  state: 'Virginia',
  city: 'Rancho Cordova',
  role: _mock.role(index),
  email: _mock.email(index),
  address: '908 Jack Locks',
  name: _mock.fullName(index),
  isVerified: _mock.boolean(index),
  company: _mock.companyNames(index),
  country: _mock.countryNames(index),
  avatarUrl: _mock.image.avatar(index),
  phoneNumber: _mock.phoneNumber(index),
  status: (index % 2 && 'unactive') || 'active',
}));

export const TICKETS: {
  id: string;
  subject: string;
  status: string;
  assigned_to: string;
  created_date: string;
  priority: string;
  action: string;
}[] = [
  {
    id: '1',
    subject: 'Login Issue',
    status: 'Open',
    assigned_to: 'John Doe',
    created_date: '2025-02-10',
    priority: 'High',
    action: 'View',
  },
  {
    id: '2',
    subject: 'Payment Failure',
    status: 'In Progress',
    assigned_to: 'Jane Smith',
    created_date: '2025-02-09',
    priority: 'Medium',
    action: 'View',
  },
  {
    id: '3',
    subject: 'Bug in Dashboard',
    status: 'Resolved',
    assigned_to: 'Robert Brown',
    created_date: '2025-02-08',
    priority: 'Low',
    action: 'View',
  },
  {
    id: '4',
    subject: 'Email Not Received',
    status: 'Open',
    assigned_to: 'Emily Johnson',
    created_date: '2025-02-07',
    priority: 'High',
    action: 'View',
  },
  {
    id: '5',
    subject: 'Page Load Slow',
    status: 'Closed',
    assigned_to: 'Michael Lee',
    created_date: '2025-02-06',
    priority: 'Medium',
    action: 'View',
  },
  {
    id: '6',
    subject: 'Error 500 on Checkout',
    status: 'In Progress',
    assigned_to: 'Sarah Wilson',
    created_date: '2025-02-05',
    priority: 'Critical',
    action: 'View',
  },
  {
    id: '7',
    subject: 'Profile Picture Not Updating',
    status: 'Resolved',
    assigned_to: 'David Martinez',
    created_date: '2025-02-04',
    priority: 'Low',
    action: 'View',
  },
  {
    id: '8',
    subject: 'Two-Factor Authentication Issue',
    status: 'Open',
    assigned_to: 'Chris Taylor',
    created_date: '2025-02-03',
    priority: 'High',
    action: 'View',
  },
  {
    id: '9',
    subject: 'Billing Discrepancy',
    status: 'Closed',
    assigned_to: 'Anna Harris',
    created_date: '2025-02-02',
    priority: 'Medium',
    action: 'View',
  },
  {
    id: '10',
    subject: 'Live Chat Not Working',
    status: 'In Progress',
    assigned_to: 'James White',
    created_date: '2025-02-01',
    priority: 'High',
    action: 'View',
  },
];

export const accountListData = [
  {
    id: '1',
    account_name: 'ABC Corp',
    website: 'https://abc.com',
    email: 'contact@abc.com',
    contact_number: '+1234567890',
    address: '123 Main St, City',
    owner: 'John Doe',
    status: 'Active',
    rating: 5,
    type: 'Enterprise',
    action: 'Edit',
  },
  {
    id: '2',
    account_name: 'XYZ Ltd',
    website: 'https://xyz.com',
    email: 'support@xyz.com',
    contact_number: '+9876543210',
    address: '456 Market St, Town',
    owner: 'Jane Smith',
    status: 'Inactive',
    rating: 4,
    type: 'SMB',
    action: 'Edit',
  },
  {
    id: '3',
    account_name: 'Global Tech',
    website: 'https://globaltech.com',
    email: 'info@globaltech.com',
    contact_number: '+1112223333',
    address: '789 Silicon Valley, CA',
    owner: 'Alice Johnson',
    status: 'Active',
    rating: 5,
    type: 'Startup',
    action: 'Edit',
  },
  {
    id: '4',
    account_name: 'NextGen Solutions',
    website: 'https://nextgen.com',
    email: 'hello@nextgen.com',
    contact_number: '+3332221111',
    address: '101 Innovation Rd, NY',
    owner: 'Michael Brown',
    status: 'Pending',
    rating: 3,
    type: 'Enterprise',
    action: 'Edit',
  },
  {
    id: '5',
    account_name: 'Digital Wave',
    website: 'https://digitalwave.com',
    email: 'sales@digitalwave.com',
    contact_number: '+4445556666',
    address: '500 Ocean Drive, Miami',
    owner: 'Sarah White',
    status: 'Active',
    rating: 4,
    type: 'SMB',
    action: 'Edit',
  },
  {
    id: '6',
    account_name: 'Innovate Hub',
    website: 'https://innovatehub.com',
    email: 'team@innovatehub.com',
    contact_number: '+5556667777',
    address: '99 Startup Blvd, SF',
    owner: 'Robert Green',
    status: 'Inactive',
    rating: 2,
    type: 'Startup',
    action: 'Edit',
  },
  {
    id: '7',
    account_name: 'Pioneer Systems',
    website: 'https://pioneersys.com',
    email: 'admin@pioneersys.com',
    contact_number: '+8887776666',
    address: '75 Tech Park, Austin',
    owner: 'Emily Adams',
    status: 'Active',
    rating: 5,
    type: 'Enterprise',
    action: 'Edit',
  },
  {
    id: '8',
    account_name: 'Visionary Inc',
    website: 'https://visionary.com',
    email: 'contact@visionary.com',
    contact_number: '+7778889999',
    address: '200 Future Lane, Seattle',
    owner: 'David Lee',
    status: 'Pending',
    rating: 3,
    type: 'SMB',
    action: 'Edit',
  },
  {
    id: '9',
    account_name: 'Growth Labs',
    website: 'https://growthlabs.com',
    email: 'growth@growthlabs.com',
    contact_number: '+2223334444',
    address: '11 Business Street, LA',
    owner: 'Olivia Martin',
    status: 'Active',
    rating: 4,
    type: 'Startup',
    action: 'Edit',
  },
  {
    id: '10',
    account_name: 'Future Tech',
    website: 'https://futuretech.com',
    email: 'future@futuretech.com',
    contact_number: '+9990001111',
    address: '42 Digital Road, Chicago',
    owner: 'William Brown',
    status: 'Inactive',
    rating: 2,
    type: 'Enterprise',
    action: 'Edit',
  },
];

export const _accountList = accountListData.map((_, index) => ({
  ..._,
  id: _mock.id(index),
}));
