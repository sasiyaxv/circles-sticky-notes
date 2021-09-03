import {
  ADD_NOTE_ACTION,
  EDIT_NOTE_ACTION,
  DELETE_NOTE_ACTION,
  GET_SETTINGS_ACTION,
  GET_SETTINGS_ACTION_SUCCESS,
  GET_SETTINGS_ACTION_FAIL,
  ADD_EMPTY_NOTE_ACTION,
} from "../actions/actionTypes";
import { addNoteSaga } from "../sagas";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

const initialValues = {
  mainHeader: null,
  isLoading: false,
  isError: false,
};

export function addNoteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPTY_NOTE_ACTION:
      const id = uuidv4();
      return [
        ...state,
        {
          noteId: id,
          noteHeader: null,
          noteValue: null,
        },
      ];

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
      return [];
    case DELETE_NOTE_ACTION:
      // const removeId = action.payload;
      return [
        ...state,
        state.filter((payload) => payload.noteId !== payload.noteId),
      ];
    // return {
    //   ...state,
    //   notes: state.notes.filter((item) => item.removeId !== removeId),
    // };
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
