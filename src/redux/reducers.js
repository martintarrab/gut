// App Global Reducers
import { combineReducers } from "redux";
import systemReducer from "redux/system/reducer";
import app from "redux/app/reducer";

const rootReducer = combineReducers({
  systemReducer,
  app
});

export default rootReducer;
