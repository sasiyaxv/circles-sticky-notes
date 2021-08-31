import {
  ADD_NOTE_ACTION,
  EDIT_NOTE_ACTION,
  DELETE_NOTE_ACTION,
} from "../actions/actionTypes";

const initialNote = {
  noteHeader: null,
  noteValue: null,
};

export function addNoteReducer(state = initialNote, action) {
  switch (action.type) {
    case ADD_NOTE_ACTION:
      return {
        ...state,
        noteHeader: action.payload.noteHeader,
        noteValue: action.payload.noteValue,
      };
    default:
      return state;
  }
}
