import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
    QueryClient,
    QueryClientProvider,
    // useQuery,
  } from '@tanstack/react-query'
  
  const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
<QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    );
