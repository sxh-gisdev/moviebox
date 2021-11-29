import { combineReducers } from "redux";
import breakingReducer from "./bbReducer";

const RootReducer = combineReducers({
  breaking: breakingReducer,
});

export default RootReducer;
