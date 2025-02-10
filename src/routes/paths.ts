// ----------------------------------------------------------------------
import { _id } from 'src/_mock/assets';

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

const MOCK_ID = _id[1];

// ----------------------------------------------------------------------

export const paths = {
  faqs: '/faqs',
  minimalStore: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    amplify: {
      signIn: `${ROOTS.AUTH}/amplify/sign-in`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      signUp: `${ROOTS.AUTH}/amplify/sign-up`,
      updatePassword: `${ROOTS.AUTH}/amplify/update-password`,
      resetPassword: `${ROOTS.AUTH}/amplify/reset-password`,
    },
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
    firebase: {
      signIn: `${ROOTS.AUTH}/firebase/sign-in`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      signUp: `${ROOTS.AUTH}/firebase/sign-up`,
      resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
    },
    auth0: {
      signIn: `${ROOTS.AUTH}/auth0/sign-in`,
    },
    supabase: {
      signIn: `${ROOTS.AUTH}/supabase/sign-in`,
      verify: `${ROOTS.AUTH}/supabase/verify`,
      signUp: `${ROOTS.AUTH}/supabase/sign-up`,
      updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
      resetPassword: `${ROOTS.AUTH}/supabase/reset-password`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    two: `${ROOTS.DASHBOARD}/two`,
    three: `${ROOTS.DASHBOARD}/three`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      five: `${ROOTS.DASHBOARD}/group/five`,
      six: `${ROOTS.DASHBOARD}/group/six`,
    },
    contact: {
      root: `${ROOTS.DASHBOARD}/contact`,
      list: `${ROOTS.DASHBOARD}/contact/list`,
      details: (id: string) => `${ROOTS.DASHBOARD}/contact/${id}/details`,
      demo: {
        details: `${ROOTS.DASHBOARD}/contact/${MOCK_ID}/details`,
      },
    },
    account: {
      root: `${ROOTS.DASHBOARD}/account`,
      list: `${ROOTS.DASHBOARD}/account/list`,
      details: (id: string) => `${ROOTS.DASHBOARD}/account/${id}/details`,
      demo: {
        details: `${ROOTS.DASHBOARD}/account/${MOCK_ID}/details`,
      },
    },
  },
};
