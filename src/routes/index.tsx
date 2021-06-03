import React from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { StartRoutes } from "./start.routes";
import { useAppContext } from "../hooks/AppContext";

export const Routes: React.FC = () => {
  const appContext = useAppContext();

  return appContext.state.competition.isActive ? (
    <BrowserRouter>
      <Redirect to="/cadastrar-times" />
      <AppRoutes />
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Redirect to="/inicio" />
      <StartRoutes />
    </BrowserRouter>
  );
};
