import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Routes } from "./routes";
import Default from "./styles/themes/default";
import { AppProvider } from "./hooks/AppContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Default}>
      <AppProvider>
        <GlobalStyles />
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
