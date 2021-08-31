import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  ADD_NOTE_ACTION,
  ADD_NOTE_ACTION_SUCCESS,
  EDIT_NOTE_ACTION,
  EDIT_NOTE_ACTION_SUCCESS,
  DELETE_NOTE_ACTION,
  DELETE_NOTE_ACTION_SUCCESS,
} from "./actions/actionTypes";

export function* addNote({ payload, callback }) {
  try {
  } catch (e) {
    yield put({ type: ADD_NOTE_ACTION_SUCCESS, message: e.message });
  }
}

export function* mySaga() {
  yield takeLatest(ADD_NOTE_ACTION, addNote);
}
