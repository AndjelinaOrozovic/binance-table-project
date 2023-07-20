import './App.css';
import Table from "./Table.tsx";
import {QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Table />
        </QueryClientProvider>
    )
}

export default App
