import {
  ADD_NOTE_ACTION,
  EDIT_NOTE_ACTION,
  DELETE_NOTE_ACTION,
} from "./actionTypes";

export function addNote(noteId, noteHeader, note) {
  return {
    type: ADD_NOTE_ACTION,
    payload: {
      noteId,
      noteHeader,
      note,
    },
  };
}

export function updateNote(noteId, noteHeader, note) {
  return {
    type: EDIT_NOTE_ACTION,
    payload: {
      noteId,
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
