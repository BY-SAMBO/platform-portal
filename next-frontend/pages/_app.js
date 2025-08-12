import '../styles/globals.css';
import { LogtoProvider } from '@logto/next';
import { logtoConfig } from '../logtoConfig';

export default function App({ Component, pageProps }) {
  return (
    <LogtoProvider config={logtoConfig} nextConfig={{}}>
      <Component {...pageProps} />
    </LogtoProvider>
  );
}
