import React from "react";

export interface ITeam {
  id: string;
  name: string;
}

export type TTeamsAction =
  | {
      type: "ADD";
      payload: ITeam;
    }
  | { type: "DELETE"; payload: string };

export interface ITeamsState {
  team: ITeam[];
}

export interface ITeamContextModel {
  state: ITeamsState;
  dispatch: React.Dispatch<TTeamsAction>;
}
