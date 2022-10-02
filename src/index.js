import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ManagedUserContext from "./context/userContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ManagedUserContext>
        <App />
      </ManagedUserContext>
    </ChakraProvider>
  </React.StrictMode>
);
