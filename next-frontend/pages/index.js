import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bootcamp Portal Next.js</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontFamily: 'Poppins, sans-serif', 
        background: 'linear-gradient(135deg, #1e1e2f 0%, #3a3a6a 100%)' 
      }}>
        <div style={{ 
          background: 'rgba(255,255,255,0.10)', 
          borderRadius: '1.5rem', 
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', 
          border: '1px solid rgba(255,255,255,0.18)',
          padding: '2rem',
          maxWidth: '28rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div style={{ 
            width: 72, 
            height: 72, 
            borderRadius: '1rem', 
            background: '#fff', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            marginBottom: '0.5rem'
          }}>
            <img src="https://placehold.co/72x72/6c63ff/fff?text=✴" alt="Bootcamp Logo" style={{ width: '3rem', height: '3rem' }} />
          </div>
          <h1 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 600, 
            color: '#fff', 
            letterSpacing: '0.01em',
            marginBottom: '0.25rem',
            textAlign: 'center'
          }}>
            Bootcamp Portal Next.js
          </h1>
          <div style={{ 
            color: '#e0e0f0',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            Inicia sesión con tu cuenta organizacional para acceder a tu dashboard personalizado.
          </div>
          <button 
            onClick={() => alert('Logto temporalmente deshabilitado. Página funcionando correctamente.')} 
            style={{ 
              background: '#6c63ff', 
              color: '#fff', 
              fontWeight: 600, 
              borderRadius: '0.75rem', 
              border: 'none', 
              cursor: 'pointer', 
              transition: 'background 0.2s',
              padding: '0.75rem 1.5rem',
              fontSize: '1.125rem',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#fff"/>
              <text x="12" y="16" textAnchor="middle" fontSize="14" fill="#6c63ff">SSO</text>
            </svg>
            Iniciar sesión con SSO (Test)
          </button>
          <div style={{ marginTop: '1rem' }}>
            <a href="/test" style={{ color: '#e0e0f0', textDecoration: 'underline' }}>
              Ver página de test
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
