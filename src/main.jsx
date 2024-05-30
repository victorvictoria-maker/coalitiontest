import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "tailwindcss/tailwind.css";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ChakraProvider>
  </React.StrictMode>
);
