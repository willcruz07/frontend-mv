import React from "react";
import { ITeamContextModel, ITeamsState, TTeamsAction } from "../models/Teams";

const defaultState: ITeamsState = {
  team: [],
};

const reducer = (state: ITeamsState, action: TTeamsAction): ITeamsState => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        team: [...state.team, action.payload],
      };

    case "DELETE": {
      return {
        ...state,
        team: state.team.filter(item => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export const TeamsContext = React.createContext({} as ITeamContextModel);

export const TeamsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  return (
    <TeamsContext.Provider value={{ state, dispatch }}>
      {children}
    </TeamsContext.Provider>
  );
};

export const useTeamContext = (): ITeamContextModel => {
  const context = React.useContext(TeamsContext);

  return context;
};
