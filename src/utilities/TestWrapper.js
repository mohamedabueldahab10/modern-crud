import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

export default function TestWrapper(props) {
  const client = new QueryClient();
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          {props.children}
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}
