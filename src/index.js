import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserAuthContextProvider>
        <App />
      </UserAuthContextProvider>
    </Router>
  </React.StrictMode>
);
