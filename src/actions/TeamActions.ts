import { ITeam, TTeamsAction } from "../models/Teams";

export const createTeam = (team: ITeam): TTeamsAction => ({
  type: "ADD",
  payload: team,
});

export const deleteTeam = (id: string): TTeamsAction => ({
  type: "DELETE",
  payload: id,
});
