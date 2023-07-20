import './App.css';
import Table from "./Table.tsx";
import {QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient()

function App() {

    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <Table />
        </QueryClientProvider>
    )
}

export default App
