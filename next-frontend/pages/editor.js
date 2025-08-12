import { useLogto } from '@logto/next';
import Link from 'next/link';
import Head from 'next/head';

export default function Editor() {
  const { isAuthenticated } = useLogto();

  if (!isAuthenticated) {
    if (typeof window !== 'undefined') {
      window.location.href = '/api/logto/sign-in';
    }
    return null;
  }

  return (
    <>
      <Head>
        <title>Editor de Código - Bootcamp Portal Next.js</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #1e1e2f 0%, #3a3a6a 100%)' }}>
        <div className="main-card p-8 max-w-2xl w-full flex flex-col items-center gap-6" style={{ background: 'rgba(255,255,255,0.10)', borderRadius: '1.5rem', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', border: '1px solid rgba(255,255,255,0.18)' }}>
          <h1 className="text-2xl mb-1" style={{ fontWeight: 600, color: '#fff', letterSpacing: '0.01em' }}>Editor de Código</h1>
          <div className="subtitle text-center mb-4" style={{ color: '#e0e0f0' }}>Aquí puedes escribir y probar código en línea.</div>
          <div id="editor-container" className="w-full bg-white" style={{ height: 500, borderRadius: '1rem', overflow: 'hidden' }}>
            <iframe src="https://stackblitz.com/edit/javascript-oqjv2y?embed=1&file=index.js" width="100%" height="500" frameBorder="0" style={{ borderRadius: '1rem' }}></iframe>
          </div>
          <Link href="/dashboard" legacyBehavior>
            <a className="mt-4 text-sm text-gray-300 hover:underline">Volver al dashboard</a>
          </Link>
        </div>
      </div>
    </>
  );
}
