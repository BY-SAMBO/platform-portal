import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bootcamp Portal Next.js</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #1e1e2f 0%, #3a3a6a 100%)' }}>
        <div className="main-card p-8 max-w-md w-full flex flex-col items-center gap-6" style={{ background: 'rgba(255,255,255,0.10)', borderRadius: '1.5rem', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', border: '1px solid rgba(255,255,255,0.18)' }}>
          <div className="brand-logo mb-2" style={{ width: 72, height: 72, borderRadius: '1rem', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
            <img src="https://placehold.co/72x72/6c63ff/fff?text=✴" alt="Bootcamp Logo" className="w-12 h-12" />
          </div>
          <h1 className="text-2xl mb-1" style={{ fontWeight: 600, color: '#fff', letterSpacing: '0.01em' }}>Bootcamp Portal Next.js</h1>
          <div className="subtitle text-center mb-4" style={{ color: '#e0e0f0' }}>Inicia sesión con tu cuenta organizacional para acceder a tu dashboard personalizado.</div>
          <Link href="/api/logto/sign-in" legacyBehavior>
            <a className="logto-btn px-6 py-3 text-lg w-full flex items-center justify-center gap-2" style={{ background: '#6c63ff', color: '#fff', fontWeight: 600, borderRadius: '0.75rem', textDecoration: 'none', transition: 'background 0.2s' }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff"/><text x="12" y="16" textAnchor="middle" fontSize="14" fill="#6c63ff">SSO</text></svg>
              Iniciar sesión con SSO
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
