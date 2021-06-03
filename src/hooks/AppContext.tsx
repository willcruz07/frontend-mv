import React from "react";

import { IAppContextModel, IAppState } from "../models/App";
import { reducer } from "../models/reducer";

const defaultState: IAppState = {
  competition: {
    isActive: false,
    name: "",
  },
  player: [],
  team: [],
};

export const AppContext = React.createContext({} as IAppContextModel);

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): IAppContextModel => {
  const context = React.useContext(AppContext);
  return context;
};
