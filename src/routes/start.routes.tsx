import React from "react";
import { Route, Switch } from "react-router";
import { Start } from "../pages/start";

export const StartRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/inicio">
        <Start />
      </Route>

      <Route path="*">
        <h1> 404 Not found</h1>
      </Route>
    </Switch>
  );
};
