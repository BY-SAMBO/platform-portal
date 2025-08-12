import useSWR from 'swr';
import Link from 'next/link';
import Head from 'next/head';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dashboard() {
  const { data, error, isLoading } = useSWR('/api/logto/user', fetcher);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #1e1e2f 0%, #3a3a6a 100%)' }}>
        <div className="text-white text-xl">Cargando...</div>
      </div>
    );
  }

  if (error || !data?.isAuthenticated) {
    if (typeof window !== 'undefined') {
      window.location.assign('/api/logto/sign-in');
    }
    return null;
  }

  return (
    <>
      <Head>
        <title>Dashboard - Bootcamp Portal Next.js</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #1e1e2f 0%, #3a3a6a 100%)' }}>
        <div className="main-card p-8 max-w-md w-full flex flex-col items-center gap-6" style={{ background: 'rgba(255,255,255,0.10)', borderRadius: '1.5rem', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', border: '1px solid rgba(255,255,255,0.18)' }}>
          <h1 className="text-2xl mb-1" style={{ fontWeight: 600, color: '#fff', letterSpacing: '0.01em' }}>Bienvenido, {data.claims?.name || data.claims?.email}</h1>
          <div className="subtitle text-center mb-4" style={{ color: '#e0e0f0' }}>Este es tu dashboard personalizado.</div>
          <Link href="/editor" legacyBehavior>
            <a className="logto-btn px-6 py-3 text-lg w-full flex items-center justify-center gap-2" style={{ background: '#6c63ff', color: '#fff', fontWeight: 600, borderRadius: '0.75rem', textDecoration: 'none', transition: 'background 0.2s' }}>Ir al editor de código</a>
          </Link>
          <button 
            onClick={() => window.location.assign('/api/logto/sign-out')}
            className="mt-4 text-sm text-gray-300 hover:underline bg-transparent border-none cursor-pointer"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
}
