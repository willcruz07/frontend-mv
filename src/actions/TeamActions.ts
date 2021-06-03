import { ITeam } from "../models/Teams";
import { TAppAction } from "../models/App";

export const createTeam = (team: ITeam): TAppAction => ({
  type: "ADD_TEAM",
  payload: team,
});

export const deleteTeam = (id: string): TAppAction => ({
  type: "DELETE_TEAM",
  payload: id,
});
