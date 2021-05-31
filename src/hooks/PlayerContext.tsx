import React from "react";
import { IPlayerContextModel, IPlayerState } from "../models/Players";
import { reducer } from "../models/reducers";

const defaultState: IPlayerState = {
  team: [],
  player: [],
};

export const PlayerContext = React.createContext({} as IPlayerContextModel);

export const PlayerProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = (): IPlayerContextModel => {
  const context = React.useContext(PlayerContext);

  return context;
};
