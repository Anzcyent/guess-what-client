import { appConstants } from "../constants";

const initialState = {
  guessNumber: null,
  isLoaded: true,
  showResultCard: false,
  showAccounting: false,
  disableButton: false,
  error: null,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case appConstants.ENTERED_NUMBER:
      return {
        ...state,
        guessNumber: action.payload,
      };

    case appConstants.LOADING:
      return {
        ...state,
        isLoaded: action.payload ? false : true,
      };

    case appConstants.RESULT_CARD:
      return {
        ...state,
        showResultCard: action.payload,
      };

    case appConstants.ACCOUNTING:
      return {
        ...state,
        showAccounting: action.payload,
      };

    case appConstants.DISABLE_BUTTON:
      return {
        ...state,
        disableButton: action.payload,
      };

    case appConstants.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
