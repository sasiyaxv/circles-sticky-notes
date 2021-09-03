import {
  ADD_NOTE_ACTION,
  EDIT_NOTE_ACTION,
  DELETE_NOTE_ACTION,
  GET_SETTINGS_ACTION,
  GET_SETTINGS_ACTION_SUCCESS,
  GET_SETTINGS_ACTION_FAIL,
  ADD_EMPTY_NOTE_ACTION,
  ADD_NOTE_ACTION_SUCCESS,
} from "./actionTypes";

export function addEmptyNote(noteId) {
  return {
    type: ADD_EMPTY_NOTE_ACTION,
    payload: {
      noteId,
    },
  };
}

export function addNote(noteHeader, noteValue) {
  return {
    type: ADD_NOTE_ACTION,
    payload: {
      noteHeader,
      noteValue,
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

export function deleteNote(noteId) {
  console.log("NOTEID", noteId);
  return {
    type: DELETE_NOTE_ACTION,
    noteId,
  };
}

export function getDataConfigAction() {
  return {
    type: GET_SETTINGS_ACTION,
    payload: {},
  };
}

export function getDataConfigActionSuccess(dataObj) {
  return {
    type: GET_SETTINGS_ACTION_SUCCESS,
    payload: dataObj,
  };
}

export function getDataConfigActionFail(dataObj) {
  return {
    type: GET_SETTINGS_ACTION_FAIL,
    payload: dataObj,
  };
}
