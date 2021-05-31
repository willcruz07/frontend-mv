import React from "react";

import { ITeam } from "../models/Teams";

export interface IPlayer {
  id: string;
  name: string;
  team?: string;
}

export type TPlayerAction =
  | {
      type: "ADD_PLAYER";
      payload: IPlayer;
    }
  | { type: "ADD_TEAM"; payload: ITeam }
  | { type: "DELETE_PLAYER"; payload: string }
  | { type: "DELETE_TEAM"; payload: string };

export interface IPlayerState {
  team: IPlayer[];
  player: IPlayer[];
}

export interface IPlayerContextModel {
  state: IPlayerState;
  dispatch: React.Dispatch<TPlayerAction>;
}
