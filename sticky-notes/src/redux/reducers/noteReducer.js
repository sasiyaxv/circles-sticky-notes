import {
  ADD_NOTE_ACTION,
  EDIT_NOTE_ACTION,
  DELETE_NOTE_ACTION,
} from "../actions/actionTypes";

const initialState = [];

export function addNoteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE_ACTION:
      const id = Math.random().toString(36).substr(2, 9);
      return [
        ...state,
        [id, action.payload.noteHeader, action.payload.noteValue],
      ];
    case DELETE_NOTE_ACTION:
      return state.filter((note) => note.id !== action.id);
    default:
      return state;
  }
}
