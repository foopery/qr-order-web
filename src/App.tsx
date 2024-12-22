import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./components/product/gets/Product";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Product />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
