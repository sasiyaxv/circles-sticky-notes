import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  ADD_NOTE_ACTION,
  ADD_NOTE_ACTION_SUCCESS,
  EDIT_NOTE_ACTION,
  EDIT_NOTE_ACTION_SUCCESS,
  DELETE_NOTE_ACTION,
  DELETE_NOTE_ACTION_SUCCESS,
} from "./actions/actionTypes";
import { createNote, editNote, deleteNote, createEmptyNote } from "../fetchApi";

export function* addNoteSaga({ payload }) {
  try {
    const note = yield call(
      createNote,
      payload.noteId,
      payload.noteHeader,
      payload.noteValue
    );
    yield put({ type: ADD_NOTE_ACTION_SUCCESS, payload: note });
  } catch (e) {}
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
  } catch (e) {}
}

export function* deleteNoteSaga({ payload }) {
  try {
    const note = yield call(deleteNote, payload.noteId);
    yield put({ type: DELETE_NOTE_ACTION_SUCCESS, payload: note });
  } catch (e) {}
}

export function* mySaga() {
  yield takeLatest(ADD_NOTE_ACTION, addNoteSaga);
  yield takeLatest(EDIT_NOTE_ACTION, editNoteSaga);
  yield takeLatest(DELETE_NOTE_ACTION, deleteNoteSaga);
}
