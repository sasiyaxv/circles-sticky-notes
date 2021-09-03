import React, { useState, useEffect } from "react";
import { Box, Button } from "rebass";
import Note from "./Note";
import { RebassHeading } from "./RebassHeading";
import { connect } from "react-redux";
import {
  addNote,
  editNote,
  deleteNote,
  getDataConfigAction,
} from "../redux/actions";
import { selectMainHeader } from "../redux/selectors/noteSelectors";

const NoteArea = (props) => {
  const { mainHeader, getNoteData, isLoading } = props;

  const [noteArea, setNoteArea] = useState([]);

  function addBtnClicked(e) {
    e.preventDefault();
    setNoteArea(noteArea.concat(<Note />));
  }

  // fetch initial data
  useEffect(() => {
    getNoteData();
  }, []);

  return (
    <Box>
      {!isLoading ? (
        <>
          <RebassHeading
            value={"Add your Notes"}
            marginBottom={[2, 3, 4]}
            fontSize={[5, 6, 7]}
          />
        </>
      ) : (
        "loading..."
      )}

      <Note />
      {noteArea}
      <Button
        onClick={addBtnClicked}
        sx={{
          fontSize: 1,
          background: "black",
          margin: 2,
          textAlign: "right",
        }}
      >
        +
      </Button>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    mainHeader: selectMainHeader(state),
    isLoading: state.settings.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewNote: (noteId, noteHeader, noteValue) => {
      dispatch(addNote(noteId, noteHeader, noteValue));
    },
    getNoteData: () => {
      dispatch(getDataConfigAction(() => {}));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteArea);
