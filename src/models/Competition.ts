import React from "react";

export interface ICompetition {
  id?: string;
  name: string;
  isActive: boolean;
  start?: Date;
  end?: Date;
}

export type TCompetitionAction =
  | {
      type: "START";
      payload: ICompetition;
    }
  | {
      type: "END";
      payload: Date;
    };

export interface ICompetitionState {
  competition: ICompetition;
}

export interface ICompetitionContextModel {
  state: ICompetitionState;
  dispatch: React.Dispatch<TCompetitionAction>;
}
