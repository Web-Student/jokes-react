import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from 'react-oidc-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';
import { Navigation } from './ReusableLayoutComponents/Navbar.tsx';

const oidcConfig = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "r-in-class-2",
  // redirect_uri: "http://api.rachelrecipe.duckdns.org/"
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
};

const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  <AuthProvider {...oidcConfig}>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="min-vh-100 bg-tertiary p-3">
            <Navigation/>
            <App />
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  </AuthProvider>
)
