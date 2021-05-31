import { IPlayerState, TPlayerAction } from "./Players";

export const reducer = (
  state: IPlayerState,
  action: TPlayerAction,
): IPlayerState => {
  switch (action.type) {
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
