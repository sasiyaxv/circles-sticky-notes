import { API_PATHS, BASE_URL } from "./constants";

const axios = require("axios");

export const fetchSettingsData = () => {
  return axios
    .get(BASE_URL + API_PATHS.APP_SETTINGS, {})
    .then(function (response) {
      return {
        mainHeader: response.data.noteBoard.mainHeader,
      };
    })
    .catch(function (error) {
      return {
        mainHeader: "",
      };
    });
};

export const createNote = (noteId, noteHeader, noteValue) => {
  return axios
    .post(BASE_URL + API_PATHS.ADD_NOTE, {
      noteId: noteId,
      noteHeader: noteHeader,
      noteValue: noteValue,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const editNote = (noteId, noteHeader, noteValue) => {
  return axios
    .post(BASE_URL + API_PATHS.EDIT_NOTE, {
      noteId: noteId,
      noteHeader: noteHeader,
      noteValue: noteValue,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteNote = (noteId) => {
  return axios
    .post(BASE_URL + API_PATHS.DELETE_NOTE, {
      noteId: noteId,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
