import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ColorsTheme, GlobalStyle } from "./styles/globalStyle.tsx";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={ColorsTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
