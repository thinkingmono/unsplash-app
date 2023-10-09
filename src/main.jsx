import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AppContext from './utils/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; /*React Query Must Import*/

const queryClient = new QueryClient(); /*Create query client*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <AppContext>
            <App />
        </AppContext>
    </QueryClientProvider>
);