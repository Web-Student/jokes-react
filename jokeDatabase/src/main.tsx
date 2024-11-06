import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from 'react-oidc-context';

const oidcConfig = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "r-in-class-2",
  redirect_uri: "http://localhost:5173/",
};


createRoot(document.getElementById('root')!).render(
  <AuthProvider {...oidcConfig}>
    <StrictMode>
      <App />
    </StrictMode>,
  </AuthProvider>
)
