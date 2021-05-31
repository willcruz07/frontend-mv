import { IPlayer, TPlayerAction } from "../models/Players";
import { ITeam } from "../models/Teams";

export const createTeam = (team: ITeam): TPlayerAction => ({
  type: "ADD_TEAM",
  payload: team,
});

export const createPlayer = (player: IPlayer): TPlayerAction => ({
  type: "ADD_PLAYER",
  payload: player,
});

export const deleteTeam = (id: string): TPlayerAction => ({
  type: "DELETE_TEAM",
  payload: id,
});

export const deletePlayer = (id: string): TPlayerAction => ({
  type: "DELETE_PLAYER",
  payload: id,
});
