import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AppContext from './utils/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; /*React Query Must Import*/
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; /*Import React Query Devtools*/

const queryClient = new QueryClient(); /*Create query client*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppContext>
        <QueryClientProvider client={queryClient}>
            <App />
            {/* <ReactQueryDevtools initialIsOpen={false}/> Add to main as a self closing component */}
        </QueryClientProvider>
    </AppContext>
);