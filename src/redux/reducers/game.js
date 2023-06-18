import { gameConstants } from "../constants";

const initialState = {
  game: {},
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case gameConstants.CREATE_GAME:
      return {
        ...state,
        game: action.payload.game,
      };
    case gameConstants.PLAY:
      return {
        ...state,
        game: action.payload.game,
      };

    default:
      return state;
  }
}
