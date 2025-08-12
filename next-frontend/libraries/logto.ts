import LogtoClient from '@logto/next';

export const logtoClient = new LogtoClient({
  appId: process.env.NEXT_PUBLIC_LOGTO_APP_ID!,
  appSecret: process.env.LOGTO_APP_SECRET!,
  endpoint: process.env.NEXT_PUBLIC_LOGTO_ENDPOINT!,
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
  cookieSecret: process.env.LOGTO_COOKIE_SECRET!,
});