import React from "react";

import { Route, Switch } from "react-router";
import { TeamRegistration } from "../pages/teamRegistration";
import { PlayerRegistration } from "../pages/playerRegistration";
import { Match } from "../pages/match";
import { Layout } from "../components/Layout";

export const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/cadastrar-times">
          <TeamRegistration />
        </Route>

        <Route path="/cadastrar-jogadores">
          <PlayerRegistration />
        </Route>

        <Route path="/partida">
          <Match />
        </Route>

        <Route path="*">
          <h1> 404 Not found</h1>
        </Route>
      </Switch>
    </Layout>
  );
};
