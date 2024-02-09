import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
const Loading = () => <div> ...loading </div>;
const client = new QueryClient();
ReactDOM.render(
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <QueryClientProvider client={client}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>,
  document.getElementById("root")
);
