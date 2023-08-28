import ThemeProvider from "./styles/ThemeProvider.tsx";
import ClientProvider from "./api/ClientProvider.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import React from "react";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClientProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ClientProvider>
  </React.StrictMode>
);
