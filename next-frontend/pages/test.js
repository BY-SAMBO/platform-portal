export default function Test() {
  return (
    <div style={{ padding: '20px', background: '#f0f0f0', minHeight: '100vh' }}>
      <h1>Test Page - Next.js está funcionando</h1>
      <p>Si ves esto, Next.js está corriendo correctamente.</p>
      <p>Variables de entorno:</p>
      <ul>
        <li>NODE_ENV: {process.env.NODE_ENV}</li>
        <li>NEXT_PUBLIC_BASE_URL: {process.env.NEXT_PUBLIC_BASE_URL || 'NO CONFIGURADA'}</li>
        <li>NEXT_PUBLIC_LOGTO_ENDPOINT: {process.env.NEXT_PUBLIC_LOGTO_ENDPOINT || 'NO CONFIGURADA'}</li>
        <li>NEXT_PUBLIC_LOGTO_APP_ID: {process.env.NEXT_PUBLIC_LOGTO_APP_ID || 'NO CONFIGURADA'}</li>
      </ul>
    </div>
  );
}