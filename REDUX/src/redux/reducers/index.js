import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  // other reducers if any
});

export default rootReducer;
