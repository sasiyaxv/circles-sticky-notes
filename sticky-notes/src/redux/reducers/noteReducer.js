import {
  ADD_NOTE_ACTION,
  EDIT_NOTE_ACTION,
  DELETE_NOTE_ACTION,
  GET_SETTINGS_ACTION,
  GET_SETTINGS_ACTION_SUCCESS,
  GET_SETTINGS_ACTION_FAIL,
} from "../actions/actionTypes";

const initialState = [];

const initialValues = {
  mainHeader: null,
  isLoading: false,
  isError: false,
};

export function addNoteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE_ACTION:
      const id = Math.random().toString(36).substr(2, 9);
      return [
        ...state,
        [id, action.payload.noteHeader, action.payload.noteValue],
      ];
    case EDIT_NOTE_ACTION:
      return [];
    case DELETE_NOTE_ACTION:
      return [state.filter((payload) => payload.noteId !== payload.noteId)];
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
