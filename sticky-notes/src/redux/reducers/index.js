import { combineReducers } from "redux";
import { addNoteReducer, addEmptyNote } from "./noteReducer";

const rootReducer = combineReducers({
  notes: addNoteReducer,
});

export default rootReducer;
