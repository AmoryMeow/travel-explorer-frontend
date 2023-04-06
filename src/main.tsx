import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import "./i18n/config";
import { ThemeProvider } from "@package/ui";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
