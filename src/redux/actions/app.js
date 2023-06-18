import { appConstants } from "../constants";

export const setEnteredNumber = (guessNumber) => (dispatch) => {
  try {
    dispatch({
      type: appConstants.ENTERED_NUMBER,
      payload: guessNumber,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const showResultCard = (isShowed) => (dispatch) => {
  try {
    dispatch({
      type: appConstants.RESULT_CARD,
      payload: isShowed,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const showAccounting = (isShowed) => (dispatch) => {
  try {
    dispatch({
      type: appConstants.ACCOUNTING,
      payload: isShowed,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const setDisableButton = (isDisabled) => (dispatch) => {
  try {
    dispatch({
      type: appConstants.DISABLE_BUTTON,
      payload: isDisabled,
    });
  } catch (err) {
    throw new Error(err);
  }
};
