import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

const gql_url = "https://spacex-production.up.railway.app/";

const client = new ApolloClient({
  uri: gql_url,
  cache: new InMemoryCache()
});

const qclient = new QueryClient();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={qclient}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </QueryClientProvider>
  </StrictMode>
);
