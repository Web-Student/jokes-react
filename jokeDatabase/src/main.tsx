import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from 'react-oidc-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const oidcConfig = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "r-in-class-2",
  redirect_uri: "http://localhost:5173/"
  //redirect_uri: import.meta.env.VITE_REDIRECT_URI,
};

const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  <AuthProvider {...oidcConfig}>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  </AuthProvider>
)
