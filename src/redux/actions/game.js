import { postData } from "../../utils/fetchData";
import { gameConstants, authConstants, appConstants } from "../constants";
import { showAccounting } from "./app";

export const createGame = (token) => async (dispatch) => {
  try {
    const res = await postData("/api/game/createGame", null, token);

    dispatch({
      type: gameConstants.PLAY,
      payload: res.data,
    });
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const play = (data, token) => async (dispatch) => {
  try {
    const res = await postData("/api/game/play", data, token);

    dispatch({
      type: gameConstants.PLAY,
      payload: res.data,
    });

    setTimeout(() => {
      dispatch({
        type: authConstants.UPDATE,
        payload: res.data.game,
      });

      dispatch(showAccounting(true));
    }, 2000);
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
