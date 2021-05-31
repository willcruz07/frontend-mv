import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Routes } from "./routes";

import Default from "./styles/themes/default";
import "./miragejs";

import { TeamsProvider } from "./hooks/TeamContext";
import { PlayerProvider } from "./hooks/PlayerContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Default}>
      <TeamsProvider>
        <PlayerProvider>
          <GlobalStyles />
          <Routes />
        </PlayerProvider>
      </TeamsProvider>
    </ThemeProvider>
  );
};

export default App;
