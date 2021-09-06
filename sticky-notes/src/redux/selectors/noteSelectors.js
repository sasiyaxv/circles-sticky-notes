import { createSelector } from "reselect";

export const selectNoteId = createSelector(
  (state) => state.note?.noteId,
  (noteId) => noteId
);

export const selectNoteHeader = createSelector(
  (state) => state.note?.noteHeader,
  (noteHeader) => noteHeader
);

export const selectNoteValue = createSelector(
  (state) => state.note?.noteValue,
  (noteValue) => noteValue
);

export const selectMainHeader = createSelector(
  (state) => state?.settings?.mainHeader,
  (mainHeader) => mainHeader
);
