import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import AppProvider from "./Context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
