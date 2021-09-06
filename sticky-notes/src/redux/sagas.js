import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  ADD_NOTE_ACTION,
  ADD_NOTE_ACTION_SUCCESS,
  EDIT_NOTE_ACTION,
  EDIT_NOTE_ACTION_SUCCESS,
  DELETE_NOTE_ACTION,
  DELETE_NOTE_ACTION_SUCCESS,
  GET_SETTINGS_ACTION,
  GET_SETTINGS_ACTION_SUCCESS,
  GET_SETTINGS_ACTION_FAIL,
} from "./actions/actionTypes";
import {
  createNote,
  editNote,
  deleteNote,
  fetchSettingsData,
} from "../fetchApi";

export function* getSettingsSaga() {
  try {
    const dataObj = yield call(fetchSettingsData);
    if (dataObj.mainHeader === "") {
      yield put({ type: GET_SETTINGS_ACTION_FAIL, payload: dataObj });
    } else {
      yield put({ type: GET_SETTINGS_ACTION_SUCCESS, payload: dataObj });
    }
  } catch (e) {}
}

export function* addNoteSaga({ payload }) {
  try {
    const note = yield call(
      createNote,
      payload.noteId,
      payload.noteHeader,
      payload.noteValue
    );
    yield put({ type: ADD_NOTE_ACTION_SUCCESS, payload: note });
  } catch (e) {
    console.log("Error occurred ", e.message);
  }
}

export function* editNoteSaga({ payload }) {
  try {
    const note = yield call(
      editNote,
      payload.noteId,
      payload.noteHeader,
      payload.noteValue
    );
    yield put({ type: EDIT_NOTE_ACTION_SUCCESS, payload: note });
  } catch (e) {
    console.log("Error occurred ", e.message);
  }
}

export function* deleteNoteSaga({ payload }) {
  try {
    const note = yield call(deleteNote, payload.noteId);
    yield put({ type: DELETE_NOTE_ACTION_SUCCESS, payload: note });
  } catch (e) {
    console.log("Error occurred ", e.message);
  }
}

export function* mySaga() {
  yield takeLatest(GET_SETTINGS_ACTION, getSettingsSaga);
  yield takeLatest(ADD_NOTE_ACTION, addNoteSaga);
  yield takeLatest(EDIT_NOTE_ACTION, editNoteSaga);
  yield takeLatest(DELETE_NOTE_ACTION, deleteNoteSaga);
}
