import { combineReducers } from "redux";
import appReducer from "./app";
import authReducer from "./auth";
import gameReducer from "./game";

const rootReducer = combineReducers({ appReducer, authReducer, gameReducer });

export default rootReducer;
