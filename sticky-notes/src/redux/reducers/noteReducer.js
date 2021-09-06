import {
  ADD_NOTE_ACTION,
  EDIT_NOTE_ACTION,
  DELETE_NOTE_ACTION,
  GET_SETTINGS_ACTION,
  GET_SETTINGS_ACTION_SUCCESS,
  GET_SETTINGS_ACTION_FAIL,
} from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

const initialValues = {
  mainHeader: null,
  isLoading: false,
  isError: false,
};

export function addNoteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE_ACTION:
      const newId = uuidv4();
      return [
        ...state,
        {
          noteId: newId,
          noteHeader: action.payload.noteHeader,
          noteValue: action.payload.noteValue,
        },
      ];
    case EDIT_NOTE_ACTION:
      const noteIndex = state.findIndex(
        (note) => note.noteId === action.payload.noteId
      );
      let notes = [...state];
      notes[noteIndex] = action.payload;
      return notes;

    case DELETE_NOTE_ACTION:
      return state.filter((notes) => notes.noteId !== action.noteId);
    default:
      return state;
  }
}

export function setValuesReducer(state = initialValues, action) {
  switch (action.type) {
    case GET_SETTINGS_ACTION:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SETTINGS_ACTION_SUCCESS:
      return {
        ...state,
        mainHeader: action.payload.mainHeader,
        isLoading: false,
      };
    case GET_SETTINGS_ACTION_FAIL:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
}
