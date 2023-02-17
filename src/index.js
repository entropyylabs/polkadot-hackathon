import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserAuthContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </UserAuthContextProvider>
    </Router>
  </React.StrictMode>
);
