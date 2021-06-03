import { IPlayer } from "../models/Players";
import { TAppAction } from "../models/App";

export const createPlayer = (player: IPlayer): TAppAction => ({
  type: "ADD_PLAYER",
  payload: player,
});

export const deletePlayer = (id: string): TAppAction => ({
  type: "DELETE_PLAYER",
  payload: id,
});
