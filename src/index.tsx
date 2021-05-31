import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CompetitionProvider } from "./hooks/CompetitionContext";

ReactDOM.render(
  <React.StrictMode>
    <CompetitionProvider>
      <App />
    </CompetitionProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
