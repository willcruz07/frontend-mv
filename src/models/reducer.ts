import { IAppState, TAppAction } from "./App";

export const reducer = (state: IAppState, action: TAppAction): IAppState => {
  switch (action.type) {
    case "START_COMPETITION":
      return {
        ...state,
        competition: action.payload,
      };

    case "END_COMPETITION":
      return {
        ...state,
        competition: {
          ...state.competition,
          end: action.payload,
          isActive: false,
        },
      };

    case "ADD_PLAYER":
      return {
        ...state,
        player: [...state.player, action.payload],
      };

    case "DELETE_PLAYER":
      return {
        ...state,
        player: state.player.filter(item => item.id !== action.payload),
      };

    case "ADD_TEAM":
      return {
        ...state,
        team: [...state.team, action.payload],
      };

    case "DELETE_TEAM":
      return {
        ...state,
        team: state.team.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};
