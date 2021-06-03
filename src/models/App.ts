import React from "react";

import { ITeam } from "./Teams";
import { IPlayer } from "./Players";
import { ICompetition } from "./Competition";

export type TAppAction =
  | {
      type: "START_COMPETITION";
      payload: ICompetition;
    }
  | {
      type: "END_COMPETITION";
      payload: Date;
    }
  | {
      type: "ADD_PLAYER";
      payload: IPlayer;
    }
  | {
      type: "DELETE_PLAYER";
      payload: string;
    }
  | {
      type: "ADD_TEAM";
      payload: ITeam;
    }
  | {
      type: "DELETE_TEAM";
      payload: string;
    };

export interface IAppState {
  competition: ICompetition;
  player: IPlayer[];
  team: ITeam[];
}

export interface IAppContextModel {
  state: IAppState;
  dispatch: React.Dispatch<TAppAction>;
}
