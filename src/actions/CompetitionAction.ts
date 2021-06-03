import { ICompetition } from "../models/Competition";
import { TAppAction } from "../models/App";

export const startCompetition = (competition: ICompetition): TAppAction => ({
  type: "START_COMPETITION",
  payload: competition,
});

export const endCompetition = (endCompetition: Date): TAppAction => ({
  type: "END_COMPETITION",
  payload: endCompetition,
});
