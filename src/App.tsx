import React from "react";
import logo from "./logo.svg";
import { PageDefault } from "./app/pages";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <PageDefault />
      </HelmetProvider>
    </>
  );
}

export default App;
