import {
  ADD_NOTE_ACTION,
  EDIT_NOTE_ACTION,
  DELETE_NOTE_ACTION,
} from "./actionTypes";

export function addNote(noteHeader, note) {
  return {
    type: ADD_NOTE_ACTION,
    payload: {
      noteHeader,
      note,
    },
  };
}

export function updateNote(noteHeader, note) {
  return {
    type: EDIT_NOTE_ACTION,
    payload: {
      noteHeader,
      note,
    },
  };
}

export function deleteNote() {
  return {
    type: DELETE_NOTE_ACTION,
    payload: {},
  };
}
