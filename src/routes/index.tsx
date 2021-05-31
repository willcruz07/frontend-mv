import React from "react";
import { useCompetition } from "../hooks/CompetitionContext";
import { BrowserRouter, Redirect } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { StartRoutes } from "./start.routes";

export const Routes: React.FC = () => {
  const competition = useCompetition();

  return competition.isActive ? (
    <BrowserRouter>
      <Redirect to="/team-registration" />
      <AppRoutes />
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Redirect to="/start" />
      <StartRoutes />
    </BrowserRouter>
  );
};
