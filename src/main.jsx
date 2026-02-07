import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (was cacheTime)
      retry: 1,
    },
    mutations: {
      retry: 1,
    },
  },
});

// Clear on startup to prevent quota errors
queryClient.clear();

// Handle quota exceeded errors globally
window.addEventListener('error', (event) => {
  if (event.message && event.message.includes('quota')) {
    console.warn('Storage quota exceeded. Clearing cache...');
    queryClient.clear();
  }
});



// This code is for all users
window.__TANSTACK_QUERY_CLIENT__ = queryClient;
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
)
