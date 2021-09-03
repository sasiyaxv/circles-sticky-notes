import { combineReducers } from "redux";
import { addNoteReducer, setValuesReducer } from "./noteReducer";

const rootReducer = combineReducers({
  notes: addNoteReducer,
  settings: setValuesReducer,
});

export default rootReducer;
