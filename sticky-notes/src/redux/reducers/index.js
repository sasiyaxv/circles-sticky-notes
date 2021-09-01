import { combineReducers } from "redux";
import { addNoteReducer } from "./noteReducer";

const rootReducer = combineReducers({
  note: addNoteReducer,
});

export default rootReducer;
